const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Token generator with expiry
const generateToken = (userId) => {
  return `token_${userId}_${Date.now()}`;
};

const generatePassword = (length = 12) => {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i += 1) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const connection = await pool.getConnection();

    // Find user by email
    const [users] = await connection.execute(
      "SELECT id, firstName, email, password FROM users WHERE email = ?",
      [email],
    );

    if (users.length === 0 || users[0].password !== password) {
      connection.release();
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = users[0];
    const token = generateToken(user.id);
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store token in sessions table
    await connection.execute(
      "INSERT INTO sessions (userId, token, expiresAt) VALUES (?, ?, ?)",
      [user.id, token, expiresAt],
    );

    connection.release();

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, firstName: user.firstName },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const connection = await pool.getConnection();

    // Check if email already exists
    const [existingUsers] = await connection.execute(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (existingUsers.length > 0) {
      connection.release();
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create new user
    const [result] = await connection.execute(
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, password],
    );

    const userId = result.insertId;
    const token = generateToken(userId);
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store token in sessions table
    await connection.execute(
      "INSERT INTO sessions (userId, token, expiresAt) VALUES (?, ?, ?)",
      [userId, token, expiresAt],
    );

    connection.release();

    res.status(201).json({
      message: "Account created successfully",
      token,
      user: { id: userId, email, firstName },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Reset password endpoint with auto-generated password
app.post("/api/reset-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const connection = await pool.getConnection();

    const [users] = await connection.execute(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (users.length === 0) {
      connection.release();
      return res
        .status(404)
        .json({ message: "No account found for this email" });
    }

    const userId = users[0].id;
    const newPassword = generatePassword(12);

    await connection.execute("UPDATE users SET password = ? WHERE id = ?", [
      newPassword,
      userId,
    ]);

    // Invalidate active sessions after password reset.
    await connection.execute("DELETE FROM sessions WHERE userId = ?", [userId]);

    connection.release();

    res.json({
      message: "Password has been reset",
      newPassword,
      password: newPassword,
    });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Welcome endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
