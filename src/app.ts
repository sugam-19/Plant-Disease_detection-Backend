import express, { Request, Response } from 'express';
import multer, { StorageEngine } from 'multer';
import fs from 'fs';
import axios from 'axios';
import path from 'path';

const app = express();
const port = 3000;

// Configure multer for file uploads
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Define the type for the Multer file
interface MulterRequest extends Request {
  file?: Express.Multer.File; // Make `file` optional
}

// Route to upload image
app.post('/upload', upload.single('image'), async (req: MulterRequest, res: Response): Promise<void> => {
  try {
    // Ensure that the file exists before proceeding
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return; // Return after sending the response
    }

    const imagePath = req.file.path;

    // Call Python backend for disease detection
    const response = await axios.post('http://localhost:5000/detect', {
      imagePath,
    });

    const result = response.data;

    res.json({
      message: 'Image uploaded and processed successfully.',
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing the image' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
