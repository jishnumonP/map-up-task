// routes/fileRoutes.js
const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controllers/fileController');
const { authenticateJWT, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authenticateJWT, authorizeRoles('admin', 'manager'), upload.single('csv'), uploadFile);

module.exports = router;
