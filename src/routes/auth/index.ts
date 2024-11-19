// routes/auth.ts
import { Router, Request, Response } from 'express';
import { addUserDetails, createUser, getUserDetails, loginUser,  requestPasswordReset, resetPassword, checkEmail, setNewPassword } from '../../controller/auth/AuthController';

const authRoute = Router();

authRoute.post('/register', async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const result = await createUser(input)
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

authRoute.post("/login", async (req: Request, res: Response) => {
  try {
    const input = {
      email: req.body.email,
      password: req.body.password
    }
    const data = await loginUser(input)
    res.status(200).json(data)
  } catch (error: any) {
     res.status(401).json({
      errors: `${error.message}`
    })
  }
})

authRoute.post("/user-details", async (req: Request, res: Response) => {
  try {
    const input = {
      user_id: req.body.id,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      phone: req.body.phone,
      country: req.body.country,
      city: req.body.city,
    }
    const data = await addUserDetails(input)
    res.status(200).json(data)
  } catch (error: any) {
     res.status(401).json({
      errors: `${error.message}`
    })
  }
})

authRoute.get("/user-details/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const data = await getUserDetails(userId)
    res.status(200).json(data)
  } catch (error: any) {
     res.status(401).json({
      errors: `${error.message}`
    })
  }
})

// Password Reset Request Route
authRoute.post("/forgot-password", async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log("email", email)
    const data = await requestPasswordReset(email);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({
      errors: `${error.message}`
    });
  }
});

// Password Reset Route (using token)
authRoute.post("/reset-password", async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    const data = await resetPassword(token, newPassword); // Call to the controller for resetting the password
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({
      errors: `${error.message}`
    });
  }
});

authRoute.post("/check-email", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const data = await checkEmail(email);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({
      errors: `${error.message}`
    });
  }
});

authRoute.post("/set-new-password", async (req: Request, res: Response) => {
  try {
    const { email, newPassword } = req.body;
    const data = await setNewPassword(email, newPassword);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({
      errors: `${error.message}`
    });
  }
});

export default authRoute;
