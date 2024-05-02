import mongoose from "mongoose";

const conntectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB successful`);
  } catch (error) {
    console.error(`${error} did not connected`);
    process.exit(1);
  }
}

export default conntectDB;
