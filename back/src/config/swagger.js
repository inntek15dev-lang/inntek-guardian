const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'ISO 27001 ISMS API',
            version: '1.0.0',
            description: 'API for Managing ISO 27001 Certification Process',
        },
        servers: [
            {
                url: 'http://localhost:3001',
            },
        ],
        components: {
            securitySchemes: {
                userId: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'x-user-id'
                }
            }
        },
        security: [{ userId: [] }]
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
