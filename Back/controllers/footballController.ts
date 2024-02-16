import axios , { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import { API_ERROR_MESSAGE } from "../constantes/errorCodes";
import { FOOTBALL_API_BASE_URL } from "../constantes/config";


/**
 * @swagger
 * tags: 
 *      name: FootballTeam
 *      description: Opérations liées aux informations footballistiques d'une équipé donnée.
 */

/**
 * @swagger
 * tags: 
 *      name: FootballCountry
 *      description: Opérations liées aux informations footballistiques d'une compétition donnée.
 */

/**
 * @swagger
 * tags: 
 *      name: FootballPlayer
 *      description: Opérations liées aux informations footballistiques d'un joueur donné.
 */

export class FootballController {
    private API_KEY: string;

    constructor(key: string){
        this.API_KEY = key;
    }


    /**
     * @swagger
     * /football/team/{id_team}:
     *    get: 
     *      summary: Obtient des informations footballistqiues.
     *      description: Récupère les informations footballistiques d'une équipe donnée.
     *      tags: [FootballTeam]
     *      parameters:
     *            - in: path
     *              name: team
     *              required: true
     *              description: Nom de l'équipe.
     *              schema:
     *                  type: string
     *      responses:
     *          200: 
     *              description: Succès. Retourne les données de l'équipe.
     *          400:
     *              description: Requête incorrecte. Erreur lors de la récupération des données de l'équipe.
     */
    public async getFootByTeam(req: Request, res: Response, next: NextFunction):Promise<void>{
        
        
        let id_team: string = req.params.id_team;
        
        try{
            const response: AxiosResponse = await axios.get(
                `${FOOTBALL_API_BASE_URL}?action=get_teams&team_id=${id_team}&APIkey=${this.API_KEY}`
            )
            const data = response.data
            res.json(data);
        }catch(error){
            next(new ApiError(API_ERROR_MESSAGE))
            
        }
    }

    /**
     * @swagger
     * /football/league/{id_country}:
     *    get: 
     *      summary: Obtient des informations footballistqiues.
     *      description: Récupère les informations footballistiques d'une compétition donnée.
     *      tags: [FootballCountry]
     *      parameters:
     *            - in: path
     *              name: country
     *              required: true
     *              description: Liste des compétitions du pays.
     *              schema:
     *                  type: string
     *      responses:
     *          200: 
     *              description: Succès. Retourne les données des compétitions du pays.
     *          400:
     *              description: Requête incorrecte. Erreur lors de la récupération des données des compétitions du pays.
     */
    public async getFootByCompetition(req: Request, res: Response, next: NextFunction):Promise<void>{
        
        
        let id_country: string = req.params.id_country;
        
        try{
            const response: AxiosResponse = await axios.get(
                `${FOOTBALL_API_BASE_URL}?action=get_leagues&country_id=${id_country}&APIkey=${this.API_KEY}`
            )
            const data = response.data
            res.json(data); 
        }catch(error){
            next(new ApiError(API_ERROR_MESSAGE))
            
        }
    }

    /**
     * @swagger
     * /football/player/{player_name}:
     *    get: 
     *      summary: Obtient des informations footballistqiues.
     *      description: Récupère les informations footballistiques d'un joueur.
     *      tags: [FootballCountry]
     *      parameters:
     *            - in: path
     *              name: player
     *              required: true
     *              description: Nom d'un joueur.
     *              schema:
     *                  type: string
     *      responses:
     *          200: 
     *              description: Succès. Retourne les données d'un joueur'.
     *          400:
     *              description: Requête incorrecte. Erreur lors de la récupération des données d'un joueur'.
     */
    public async getFootByPlayer(req: Request, res: Response, next: NextFunction):Promise<void>{
        
        
        let player_name: string = req.params.player_name;
        
        try{
            const response: AxiosResponse = await axios.get(
                `${FOOTBALL_API_BASE_URL}?action=get_players&player_name=${player_name}&APIkey=${this.API_KEY}`
            )
            const data = response.data
            res.json(data);
        }catch(error){
            next(new ApiError(API_ERROR_MESSAGE))
            
        }
    }
}
