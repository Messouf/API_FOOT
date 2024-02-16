import path from "path";

export const swaggerOptions = {
    swaggerDefinition:{
        openapi: '3.0.0',
        info: {
            title: 'API FOOT',
            version: ' 1.0.0',
            description: `Documentation de l'API Football`
        },
        servers: [
            {
                url:'http://localhost:3000',
                description: 'Serveur local'
            },
        ],
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')],
};