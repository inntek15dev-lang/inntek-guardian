require('dotenv').config();
const mysql = require('mysql2/promise');

async function initDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
    });

    try {
        const dbName = process.env.DB_NAME || 'iso27001_db';
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
        console.log(`Database "${dbName}" checked/created successfully.`);
    } catch (error) {
        console.error('Error creating database:', error);
    } finally {
        await connection.end();
    }
}

initDB();
