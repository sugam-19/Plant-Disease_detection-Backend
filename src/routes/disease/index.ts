// routes/auth.ts
import { Router, Request, Response } from 'express';
import { getAllDiseases } from '../../controller/diseases/DiseasesController';

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await getAllDiseases()
    res.status(200).json(data)
  } catch (error: any) {
     res.status(401).json({
      errors: `${error.message}`
    })
  }
})
``
export default router;
