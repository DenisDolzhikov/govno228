import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadRouter from './src/routes/uploadSomething.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;

app.use(express.static(__filename));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(multer({ dest: 'uploads' }).single('filedata'));
app.use(morgan('common'));

app.use(uploadRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));