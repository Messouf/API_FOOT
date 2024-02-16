import dotenv from "dotenv";
dotenv.config();

export const API_KEY = process.env.FOOTBALL_API_KEY || "default_api_key";
export const FOOTBALL_API_BASE_URL = "https://apiv3.apifootball.com/";