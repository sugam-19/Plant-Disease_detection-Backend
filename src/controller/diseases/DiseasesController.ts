const db = require("../../../models")
const { RecentDiagnosed, User, PlantDisease } = db

export const getAllDiseases = async ():   Promise<any> => {
    const recentDiagonised = await PlantDisease.findAll({})
    return {
        data: recentDiagonised
    };
}