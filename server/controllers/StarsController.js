import { starsService } from "../services/StarsService.js";
import BaseController from "../utils/BaseController.js";

export class StarsController extends BaseController {
    constructor(){
        super('/api/stars')
        this.router
        .post('', this.createStar)
    }
    async createStar(req, res, next) {
        try {
            let starData = req.body
            let star = await starsService.createStar(starData)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }
}