const db = require("../../../models")
const { RecentDiagnosed, User, PlantDisease } = db

export const getAllRecentDiagonised = async ():   Promise<any> => {
    const recentDiagonised = await RecentDiagnosed.findAll({
        include: [
            {
                model: User,
                as: "user"
            },
            {
                model: PlantDisease,
                as: "plantDisease"
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    })
    return {data: recentDiagonised};
}

export const recentDiagonisedImage = async (id: any):   Promise<any> => {
    const recentDiagonised = await RecentDiagnosed.findAll({
        where: {
            user_id: id
        },
        include: [
            {
                model: User,
                as: "user"
            },
            {
                model: PlantDisease,
                as: "plantDisease"
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    })
    return recentDiagonised;
}