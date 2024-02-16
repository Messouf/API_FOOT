import express, { Request, Response} from "express";

const app = express();
const API_KEY = "c61e1f134b44272162551dddd313522b5c8254b0fba6507fb0c4cdec8a97ffd8";

app.get("/test", (req: Request, res: Response) => {
    res.send("Hello, voici l'api football");
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;

app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'éxecution sur le port ${PORT}`);
});

