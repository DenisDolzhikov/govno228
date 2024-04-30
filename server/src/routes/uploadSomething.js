import express from 'express';
import uploadController from '../controllers/uploadSomething.js';

const router = express.Router();

router.post('/api/upload', uploadController);

export default router;