// Create server Express
const express = require('express');

//Import cors
const cors = require('cors');

//Util
const { sequelize } = require('./utils/database');

// Import route Todos
const { routerTodos } = require('./routes/todo.route');

//Init server app
const app = express();

// Use express.JSON
app.use(express.json());

// Use cors
app.use(cors());

// Define endpoint for ToDos
app.use('/api/v1/todos', routerTodos);

//Authenticate sequelize
sequelize
  .authenticate()
  .then(() => console.log('Base de datos autenticada'))
  .catch((error) => console.log(error));

//Sync sequelize
sequelize
  .sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));

app.listen(4000, () => {
  console.log('El servidor está corriendo en el puerto 4000');
});
