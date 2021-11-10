import config from "../config/config";
import  {connect } from "mongoose";

const connectDB = async () => {
    const dbconfig = new config();
  try {

    const mongoURI: string = dbconfig.MONGO_URI;

    const options: object = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("MongoDB Connection Established..");
  } catch (err) {
    console.error("DB Connection failed",err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;