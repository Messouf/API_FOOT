import express, { Request, Response, NextFunction} from "express";
import { errorHandler } from "./middlewares/errorHandlers";
import { FootballController } from "./controllers/footballController";
import { API_KEY } from "./constantes/config";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from "./swaggerOptions";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const footballController = new FootballController(API_KEY);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;


app.get("/test", (req: Request, res: Response) => {
    res.send("Hello, voici l'api football");
});

app.get("/football/team/:id_team", async (req: Request, res: Response, next: NextFunction) => {
    await footballController.getFootByTeam(req, res, next);
});

app.get("/football/league/:id_country", async (req: Request, res: Response, next: NextFunction) => {
    await footballController.getFootByCompetition(req, res, next);
});

app.get("/football/player/:player_name", async (req: Request, res: Response, next: NextFunction) => {
    await footballController.getFootByPlayer(req, res, next);
});

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'éxecution sur le port ${PORT}`);
});

