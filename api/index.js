import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// Conexión a MongoDB
mongoose
  .connect(
    "mongodb+srv://jairocolondev:Dev531*@blog-jairocolon.verpo4r.mongodb.net/?retryWrites=true&w=majority&appName=blog-jairocolon"
  )
  // .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB...", err);
  });

const app = express();

app.use(express.json());

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

// Rutas
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware de errores
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Error interno del servidor";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
