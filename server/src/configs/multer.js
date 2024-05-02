import multer from "multer";

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10485760,
  }
});

export default upload;