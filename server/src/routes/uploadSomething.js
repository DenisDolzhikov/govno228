const express = require('express');
const uploadController = require('../controllers/uploadSomething');

const router = express.Router();

router.post('/api/upload', uploadController);

module.exports = router;