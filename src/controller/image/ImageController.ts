import { generateAccessToken, hashPassword, matchPassword } from "../../../utils/AuthUtils";

const db = require("../../../models");
const { User, UserDetails, PlantDisease, RecentDiagnosed } = db;

export const getAndStoreRecentDiagnosized = async (input: any, imagePath: string, userId: number, imageUrl: any): Promise<any> => {
  try {
    console.log("Input from Python response:", input);

    // Find the plant disease details
    const diseaseDetails = await PlantDisease.findOne({
      where: { name: input.result },
    });

    if (!diseaseDetails) {
      console.error("Disease not found in PlantDisease table");
      return null;
    }

    // Store the diagnosis result in RecentDiagnosed table
    const recentDiagnosis = await RecentDiagnosed.create({
      user_id: userId,
      image: imageUrl,
      plant_disease_id: diseaseDetails.id,
    });

    return recentDiagnosis;
  } catch (error) {
    console.error("Error storing diagnosis result:", error);
    throw error;
  }
};

export const getPlantDetails = async (input: any): Promise<any> => {
  try {
    console.log("Input from Python response:", input);

    // Find the plant disease details
    const diseaseDetails = await PlantDisease.findOne({
      where: { name: input.result },
    });

    if (!diseaseDetails) {
      console.error("Disease not found in PlantDisease table");
      return null;
    }else {
      return diseaseDetails
    }

  } catch (error) {
    console.error("Error storing diagnosis result:", error);
    throw error;
  }
};
