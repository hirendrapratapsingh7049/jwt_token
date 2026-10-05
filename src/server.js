const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRouter = require("./routes/authRouter");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB
connectDB();

// Routes
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});