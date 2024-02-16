import axios , { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { API_ERROR_MESSAGE } from "../constantes/errorCodes";
import { FOOTBALL_API_BASE_URL } from "../constantes/config";

export class FootballController {
    private API_KEY: string;

    constructor(key: string){
        this.API_KEY = key;
    }

    public async getFootByTeam(req: Request, res: Response, next: NextFunction):Promise<void>{
        
        const team: string = req.params.team;
        let id_team: string = req.params.id_team;

        try{
            const response: AxiosResponse = await axios.get(
                `${FOOTBALL_API_BASE_URL}?action=get_teams&team_id=${id_team}&APIkey=${this.API_KEY}&q=${team}&lang=fr`
            )
            const data = response.data
            res.json(data);
        }catch(error){
            next(new ApiError(API_ERROR_MESSAGE))
            
        }
    }
}
