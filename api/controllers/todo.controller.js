const { Todo } = require('../models/model.todo')


//Get All Todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll({ where: { status: 'active' } });
        res.status(200).json({
            status: "succes",
            data: { todos }
        });

    } catch (error) {
        console.log(error);
    }
};

// Post a New Todo
exports.postNewTodo = (req, res) => {
    try {
        
    } catch (error) {
        
    }

};

// Patch update Todo given an Id
exports.patchIdTodo = (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

// Delete Todo given an Id
exports.deleteIdTodo = (req, res) => {
    try {
        
    } catch (error) {
        
    }
};