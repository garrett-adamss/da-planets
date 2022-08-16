import { dbContext } from "../db/DbContext.js"

class StarsService{
    async getStarByGalaxyId(galaxyId) {
        let galaxies = await dbContext.Stars.find({ galaxyId })
        return galaxies
    }
   async createStar(starData) {
        let star = await dbContext.Stars.create(starData)
        return star
    }
}

export const starsService = new StarsService()