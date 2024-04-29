const express = require('express');
const multer = require('multer');
const uploadRouter = require('./src/routes/uploadSomething');

const app = express();

app.use(express.static(__dirname));
app.use(multer({ dest: 'uploads' }).single('filedata'));

app.use(uploadRouter);

app.listen(5000, () => console.log('Server started at 5000 Port'));