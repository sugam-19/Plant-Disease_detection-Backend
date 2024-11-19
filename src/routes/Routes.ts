// routes/Routes.ts
import { Router } from 'express';
import imageUploadRouter from './image';
import authRoute from './auth';
import recentDiagonised from './recentDiagonised';
import disease from './disease';

const router = Router();

// Define your routes
router.use('/image', imageUploadRouter);
router.use('/auth', authRoute);
router.use('/recent-diagonised', recentDiagonised)
router.use('/diseases', disease)

export default router;