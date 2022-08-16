import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async getGalaxies() {
        let galaxies = await dbContext.Galaxies.find()
        return galaxies
    }
    async createGalaxy(galaxyData) {
        let galaxies = await dbContext.Galaxies.create(galaxyData)
        return galaxies
    }

}


export const galaxiesService = new GalaxiesService()