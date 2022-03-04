// Create server Express
const express = require("express");

//Util
const { sequelize } = require('./utils/database');

// Import route Todos
const { routerTodos } = require('./routes/todo.route');

//Init server app
const app = express();

// Use express.JSON
app.use(express.json());

// Define endpoint for ToDos
app.use('api/v1/todos', routerTodos);

//Authenticate sequelize
sequelize
    .authenticate()
    .then(() => console.log("Base de datos autenticada"))
    .catch(error => console.log(error));

//Sync sequelize
sequelize.sync()
    .then(() => console.log("Base de datos sincronizada"))
    .catch(error => console.log(error));

app.listen(4000, () => {
    console.log("El servidor está corriendo en el puerto 4000");
});
// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())
