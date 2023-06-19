import express from "express";
import { uploadFile, getAllFiles } from "../controllers/fileController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.post("/upload", upload.single("image"), uploadFile);
router.get("/all-files", getAllFiles);

export default router;
