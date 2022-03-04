//Declare express
const express = require('express');

//import controllers
const { 
    getAllTodos,
    postNewTodo,
    patchIdTodo,
    deleteIdTodo
} = require('../controllers/todo.controller')
//Declare router
const router = express.Router();


// GET fetch all ToDos
router.get("/", getAllTodos);

// POST Create new ToDo
router.post("/",postNewTodo);

// PATCH Update ToDo given an ID
router.patch("/:id", patchIdTodo);

// DELETE Delete ToDo given an ID (destroy or soft delete)
router.delete("/:id", deleteIdTodo);

module.exports = { routerTodos: router};
