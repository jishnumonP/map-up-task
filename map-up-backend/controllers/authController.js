// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/userModel');

const register = async (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser(email, hashedPassword, role);
  res.status(201).json({ message: 'User created', user: newUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { register, login };
