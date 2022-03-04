const { Sequelize } = require('sequelize');
//const dotenv = require('dotenv');
//dotenv.config({ path: './config.env' });

// Localhost connection
const sequelize = new Sequelize({
    host: "localhost",//process.env.DB_HOST, // localhost
    username: "postgres",//process.env.DB_USER, // postgres
    password: "postgres",//process.env.DB_PASSWORD,
    port: 5432,
    database: "postgres",//process.env.DB, // example
    dialect: "postgres"
});

module.exports = { sequelize };
