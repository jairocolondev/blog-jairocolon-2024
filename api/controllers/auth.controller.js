import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const singup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ msg: "Todos los campos son requeridos" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "Registro exitoso" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};
