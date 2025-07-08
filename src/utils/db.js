import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.ATLAS_URI;
    if (!uri) throw new Error("ATLAS_URI is not defined in .env");

    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
