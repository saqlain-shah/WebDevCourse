const express = require("express");
const dotenv = require ("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require= require("mongoose");
const auth = require('./routes/auth');

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

app.use("/api",route)
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
