const express = require("express");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "super_tajny_klucz_lab4";

// Middleware autoryzacji
const verifyToken = (req, res, next) => {
  // GET jest publiczny, reszta wymaga tokenu [cite: 60, 78]
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

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./books.sqlite",
});

// Model Książki [cite: 56-58]
const Book = sequelize.define("book", {
  title: { type: Sequelize.STRING, allowNull: false },
  author: { type: Sequelize.STRING, allowNull: false },
  year: { type: Sequelize.INTEGER },
});

sequelize.sync();

// Endpointy [cite: 60]

app.get("/api/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

app.get("/api/books/:bookId", async (req, res) => {
  const book = await Book.findByPk(req.params.bookId);
  if (!book) return res.status(404).json({ error: "Książka nie znaleziona" });
  res.json(book);
});

app.post("/api/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = await Book.create({ title, author, year });
    res.status(201).json({ id: book.id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/books/:bookId", async (req, res) => {
  const result = await Book.destroy({ where: { id: req.params.bookId } });
  if (!result) return res.status(404).json({ error: "Nie znaleziono" });
  res.status(204).send();
});

app.listen(3001, () => {
  console.log("Books Service running on port 3001");
});
