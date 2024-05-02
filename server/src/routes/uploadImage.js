import express from 'express';
import uploadImageController from '../controllers/uploadImage.js';
import upload from '../configs/multer.js';

const router = express.Router();

router.post('/api/uploadImage', upload.single('file-data'), uploadImageController);

export default router;