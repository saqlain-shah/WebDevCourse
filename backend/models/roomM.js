import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    roomNumbers: {
      type: [Number], // Assuming roomNumbers is an array of numbers
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);


