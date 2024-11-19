import { Router, Request, Response } from 'express';
import multer, { StorageEngine } from 'multer';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { getAndStoreRecentDiagnosized, getPlantDetails } from '../../controller/image/ImageController';

const router = Router();

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
router.post('/upload', upload.single('image'), async (req: MulterRequest, res: Response): Promise<void> => {
  try {
    console.log("first")
    // Ensure that the file exists before proceeding
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return; // Return after sending the response
    }

    const imagePath = req.file.path;
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${path.basename(imagePath)}`;

    // Call Python backend for disease detection
    const response = await axios.post('http://0.0.0.0:5000/detect', {
      imagePath,
    });

    const result = response.data;
    const userId = req.body.userId;
    const plantDiseaseRecord = await getAndStoreRecentDiagnosized(result, imagePath, userId, imageUrl);
    const plantDetail = await getPlantDetails(result)

    res.json({
      message: 'Image uploaded and processed successfully.',
      result,
      plantDetail,
      imageUrl
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing the image' });
  }
});

export default router;