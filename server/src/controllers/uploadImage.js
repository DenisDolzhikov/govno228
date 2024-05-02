import UploadImage from "../models/uploadImage.js";

const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      res.json({
        success: false,
        message: 'You must provide at lest 1 file',
      });
    } else {
      let imageUploadeObject = {
        file: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
        fileName: req.body.fileName,
      };

      const uploadObject = new UploadImage(imageUploadeObject);
      const uploadProcess = await uploadObject.save();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

export default uploadImageController;