import { generateAccessToken, hashPassword, matchPassword } from "../../../utils/AuthUtils";
import { sendEmail } from "../../../utils/EmailUtils"; // Utility for sending emails
import crypto from "crypto"; // For generating the reset token
import bcrypt from "bcryptjs"; // For hashing the new password

const db = require("../../../models")
const { User, UserDetails, ForgotPassword } = db

export const createUser = async (input: any): Promise<any> => {
    if (input.email) {
        const isEmailUnique = await User.findOne({
            where: { email: input.email, deletedAt: null }
        });

        if(isEmailUnique) {
            return {
                errors: {
                    email: "Email already exists."
                }
            }
        }
    }

    if(input.password) {
        input.password = await hashPassword(input.password)
    }

    const user = await User.create(input)
    delete user.password;
    return user;
}

export const loginUser = async (input: any) => {
    console.log("inut", input)
    const user = await User.findOne({
        where: {
            email: input.email
        }
    })

    if(!user || user === null) {
        throw new Error("Invalid Credentials")
    }

    const matchedPassword = await matchPassword(input.password, user)
    console.log("mathc", matchPassword)

    if(!matchedPassword) {
        throw new Error("Invalid Credentials")
    }

    let userData = user.toJSON()
    return {
        message: "Logged In Successfully",
        accessToken: generateAccessToken(userData),
    }
}

export const addUserDetails = async (input: any): Promise<any> => {
    const user = await UserDetails.findOne({
        where: {
            user_id: input.user_id
        }
    })
    let userDetails: any;
    if(user) {
        userDetails = await user.update(input)
    } else {
        userDetails = await UserDetails.create(input)
    }
    return userDetails;
}

export const getUserDetails = async (userId: any): Promise<any> => {
    const userDetails = await UserDetails.findOne({
        where: {
            user_id: userId
        }
    })
    return userDetails;
}

export const requestPasswordReset = async (email: string) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }
  
    // Generate a reset token
    const token = crypto.randomBytes(20).toString("hex");
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    await ForgotPassword.create({
      user_id: user.id,
      token,
      expires_at: expiresAt,
    });
  
    const resetLink = `https://yourapp.com/reset-password?token=${token}`;
    await sendEmail(user.email, "Password Reset", `Click here to reset your password: ${resetLink}`);
  
    return { success: true, message: "Password reset link sent to your email." };
  };

  export const resetPassword = async (token: string, newPassword: string) => {
    // Find the reset request by token
    const resetRequest = await ForgotPassword.findOne({ where: { token } });
    if (!resetRequest || resetRequest.expires_at < new Date()) {
      throw new Error("Invalid or expired token");
    }
  
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
  
    // Find the user and update the password
    const user = await User.findByPk(resetRequest.user_id);
    if (!user) {
      throw new Error("User not found");
    }
    user.password = hashedPassword;
    await user.save();
  
    // Delete the reset request after the password is updated
    await ForgotPassword.destroy({ where: { token } });
  
    return { message: "Password successfully reset" };
  };

  export const checkEmail = async (email: string) => {
    try {
        if (!email || typeof email !== 'string') {
            return {
                message: "Email is required and should be a valid string"
            };
        }

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return {
                message: "Email not found"
            };
        }

        return {
            message: "Email found",
            user
        };
    } catch (error) {
        console.error("Error checking email: ", error);
        return { message: "Server error" };
    }
};

export const setNewPassword = async (email: string, newPassword: string) => {
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        throw new Error("User not found.");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      await user.save();
  
      return { message: "Password updated successfully." };
    } catch (error: any) {
      throw new Error(error.message || "Error setting new password.");
    }
  };