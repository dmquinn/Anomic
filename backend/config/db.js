import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.REACT_APP_MONGO_URI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
