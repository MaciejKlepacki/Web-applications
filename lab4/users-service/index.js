const express = require("express");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const SECRET_KEY = "super_tajny_klucz_lab4"; // Ten sam klucz dla wszystkich serwisów

// Konfiguracja bazy danych SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./users.sqlite",
});

// Model Użytkownika [cite: 71-74]
const User = sequelize.define("user", {
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

sequelize.sync();

// POST /api/register - Rejestracja [cite: 76]
app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Szyfrowanie hasła
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ id: user.id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/login - Logowanie i generowanie JWT [cite: 76]
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: "Nieprawidłowe dane" });

    // Weryfikacja hasła
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ error: "Nieprawidłowe dane" });

    // Generowanie tokenu
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3003, () => {
  console.log("Users Service running on port 3003");
});
