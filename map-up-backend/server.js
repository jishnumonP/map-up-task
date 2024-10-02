// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
