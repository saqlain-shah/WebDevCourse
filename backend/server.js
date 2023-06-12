
// import  express  from ("express");
// const app =express();
// const port =3000;

// app.get("/",(req,res)=>{
//     res.send("hello from server")    ;
// })

// app.listen(port,()=>{
//     console.log(`server is listning on port$(port)`);
// })
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// // import authRoute from "./routes/auth.js";
// // import usersRoute from "./routes/users.js";
// // import hotelsRoute from "./routes/hotels.js";
// // import roomsRoute from "./routes/rooms.js";
// // import bookingsRoute from "./routes/bookings.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";


import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/userRoute.js";
import hotelsRoute from "./routes/hotelRoutes.js";
import roomsRoute from "./models/roomModels.js";
 

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


// app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);
// app.use("/api/bookings", bookingsRoute);

app.use("/api/auth",authRoute)
app.use("/api/user",usersRoute)
app.use("/api/hotel",hotelsRoute)
app.use("/api/room",roomsRoute)
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


app.listen(8800, () => {
  connect();
  console.log("server listen on port 8800");    
  console.log("Connected to backend.");
});

