// controllers/fileController.js
const fs = require('fs');
const csv = require('csv-parser');
const { queue } = require('../workers/csvWorker');

const uploadFile = async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No file uploaded' });

  // Add the file to a background queue for processing
  queue.add({ filePath: file.path });

  res.status(200).json({ message: 'File uploaded and being processed' });
};

module.exports = { uploadFile };
