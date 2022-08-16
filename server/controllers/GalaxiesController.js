import { galaxiesService } from "../services/GalaxiesService.js";
import { starsService } from "../services/StarsService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController{
    constructor(){
        super ('api/galaxies')
        this.router
        .get('', this.getGalaxies)
        .post('', this.createGalaxy)
        .get('/:galaxyId/stars', this.getStarByGalaxyId)

    }

    async getGalaxies(req, res, next){
        try {
            let galaxies = await galaxiesService.getGalaxies()
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next){
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesService.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getStarByGalaxyId(req, res, next){
        try {
            let galaxies = await starsService.getStarByGalaxyId(req.params.galaxyId)
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
}
