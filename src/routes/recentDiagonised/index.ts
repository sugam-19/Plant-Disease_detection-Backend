// routes/auth.ts
import { Router, Request, Response } from 'express';
import { addUserDetails, createUser, getUserDetails, loginUser } from '../../controller/auth/AuthController';
import { recentDiagonisedImage, getAllRecentDiagonised } from '../../controller/recentDiagonised/RecentDiagonised';

const recentDiagonised = Router();

recentDiagonised.get("/get-all", async (req: Request, res: Response) => {
  try {
    const data = await getAllRecentDiagonised()
    res.status(200).json(data)
  } catch (error: any) {
     res.status(401).json({
      errors: `${error.message}`
    })
  }
})

recentDiagonised.get("/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const data = await recentDiagonisedImage(userId)
    res.status(200).json(data)
  } catch (error: any) {
     res.status(401).json({
      errors: `${error.message}`
    })
  }
})

export default recentDiagonised;
