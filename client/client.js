import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Database connection successful");
    return mongoose.connection;
  } catch (error) {
    console.log("Database connection failed: ",error.message)
    process.exit(1)
  }
};
