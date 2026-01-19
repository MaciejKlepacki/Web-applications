const express = require("express");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const axios = require("axios"); // Do komunikacji z serwisem książek

const app = express();
app.use(express.json());

const SECRET_KEY = "super_tajny_klucz_lab4";

// Middleware autoryzacji JWT
const verifyToken = (req, res, next) => {
  if (req.method === "GET") return next();

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Brak tokenu" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Nieprawidłowy token" });
    req.user = user;
    next();
  });
};

app.use(verifyToken);

// Konfiguracja DB
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./orders.sqlite",
});

// Model Zamówienia [cite: 62-66]
const Order = sequelize.define("order", {
  userId: { type: Sequelize.INTEGER, allowNull: false },
  bookId: { type: Sequelize.INTEGER, allowNull: false },
  quantity: { type: Sequelize.INTEGER, allowNull: false },
});

sequelize.sync();

// GET /api/orders/:userId - Pobieranie zamówień [cite: 68]
app.get("/api/orders/:userId", async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.params.userId } });
  res.json(orders);
});

// POST /api/orders - Dodawanie zamówienia (wymaga JWT) [cite: 68]
app.post("/api/orders", async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  try {
    // Sprawdzenie czy książka istnieje w Serwisie 1 (Books Service)
    await axios.get(`http://localhost:3001/api/books/${bookId}`);

    // Jeśli nie rzuciło błędu (książka istnieje), tworzymy zamówienie
    const order = await Order.create({ userId, bookId, quantity });
    res.status(201).json({ id: order.id });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res
        .status(404)
        .json({ error: "Książka o podanym ID nie istnieje" });
    }
    res
      .status(500)
      .json({ error: "Błąd komunikacji z serwisem książek lub błąd bazy" });
  }
});

// DELETE /api/orders/:orderId - Usuwanie (wymaga JWT) [cite: 69]
app.delete("/api/orders/:orderId", async (req, res) => {
  const result = await Order.destroy({ where: { id: req.params.orderId } });
  if (!result)
    return res.status(404).json({ error: "Nie znaleziono zamówienia" });
  res.status(204).send();
});

// PATCH /api/orders/:orderId - Aktualizacja (wymaga JWT) [cite: 69]
app.patch("/api/orders/:orderId", async (req, res) => {
  const { quantity } = req.body;
  const order = await Order.findByPk(req.params.orderId);

  if (!order)
    return res.status(404).json({ error: "Nie znaleziono zamówienia" });

  if (quantity) order.quantity = quantity;
  await order.save();

  res.json(order);
});

app.listen(3002, () => {
  console.log("Orders Service running on port 3002");
});
