import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRouth from"./routes/userRoute.js";
// import userRouth from"./routes/hotel.js";
import hotelRouth from "./routes/hotel.js";
import roomRouth from "./models/room.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
//user
app.use("/api/auth", authRoute);
app.use("/api/user",userRouth);
app.use("/api/hotel",hotelRouth);
app.use("/api/room",roomRouth);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server listen on port ${process.env.PORT}`);
  console.log("Express Server is Started.");
});
