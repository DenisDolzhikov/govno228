import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import conntectDB from './src/configs/db.js';
import upload from './src/configs/multer.js';

import uploadRouter from './src/routes/uploadImage.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__filename));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(multer({ dest: 'uploads' }).single('filedata'));
app.use(morgan('common'));

//Multer


//Routes
app.use(uploadRouter);

const server = () => app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
const start = () => {
  try {
    server();
    conntectDB();
  } catch (error) {
    console.error(error);
  }
}

start();

process.on('SIGINT', () => server.close());
process.on('SIGTERM', () => server.close());