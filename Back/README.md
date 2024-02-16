# API_FOOT
Ce projet consiste à utiliser une API de football afin de renvoyer des données des voulues sur notre application.

## Technologies Utilisées
- **Langage de programmation**: Typescript

## Configuration requise
- @types/express": "^4.17.21",
- @types/node": "^20.11.19",
- "axios": "^1.6.7",
- "dotenv": "^16.4.4",
- "express": "^4.18.2",
- "node": "^21.6.2",
- "nodemon": "^3.0.3",
- "swagger-jsdoc": "^6.2.8",
- "swagger-ui-express": "^5.0.0",
- "ts-node": "^10.9.2",
- "typescript": "^5.3.3"

## Exemple d'utilisation
### Exemple de récupération d'une équipe
```bash
`${FOOTBALL_API_BASE_URL}?action=get_teams&team_id=${id_team}&APIkey=${this.API_KEY}`
```
id_team -> psg = 100


### Exemple de récupération d'une compétition d'un pays
```bash
`${FOOTBALL_API_BASE_URL}?action=get_leagues&country_id=${id_country}&APIkey=${this.API_KEY}`
```
id_country -> france = 3


### Exemple de récupération d'un joueur
```bash
`${FOOTBALL_API_BASE_URL}?action=get_players&player_name=${player_name}&APIkey=${this.API_KEY}`
```
player_name = Benzema


## Guide d'installation

```
git clone  https://github.com/Messouf/API_FOOT.git

cd API_FOOT

cd Back

npm install

npm start
```
