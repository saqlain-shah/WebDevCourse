import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    filename: String,
    originalname: String,
    path: String,
});

export default mongoose.model("File", fileSchema);