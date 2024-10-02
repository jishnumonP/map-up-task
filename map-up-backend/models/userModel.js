// models/userModel.js
const pool = require('../config/db');

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const createUser = async (email, hashedPassword, role) => {
  const result = await pool.query(
    'INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING *',
    [email, hashedPassword, role]
  );
  return result.rows[0];
};

module.exports = { findUserByEmail, createUser };
