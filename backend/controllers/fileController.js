import File from "../models/fileuploadmodels.js";

// Handle file upload
export const uploadFile = async(req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    const file = new File({
        filename: req.file.filename,
        originalname: req.file.originalname,
        path: req.file.path,
    });
    console.log(file);
    try {
        await file.save();
        res.send("File uploaded successfully.");
    } catch (error) {
        res.status(500).send("An error occurred while uploading the file.");
    }
};

// Retrieve all files
export const getAllFiles = async(req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (error) {
        res.status(500).send("An error occurred while retrieving the files.");
    }
};