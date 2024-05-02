import mongoose from "mongoose";

const uploadSomethingSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
});

const UploadSomething = mongoose.model('UploadSomething', uploadSomethingSchema);

export default UploadSomething;