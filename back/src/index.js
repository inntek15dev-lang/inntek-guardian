require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const { Document, Control, Audit, NonConformity } = require('./models');
const { Role, Permission, User } = require('./models/auth');

const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const ismsRoutes = require('./routes/isms');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', ismsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL');

        // In dev mode, we might want to sync models
        // await sequelize.sync({ alter: true });

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
}

startServer();
