const { Todo } = require('../models/model.todo');
//const { filterObj } = require('../utils/filterObj');

//Get All Todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { status: 'active' } });
    res.status(200).json({
      status: 'success',
      data: { todos }
    });
  } catch (error) {
    console.log(error);
  }
};

// Post a New Todo
exports.postNewTodo = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || content === '') {
      res.estatus(400).jason({
        status: 'error',
        message: 'Must write something in input'
      });
      return;
    } else {
      const newTodo = await Todo.create({
        content
      });
      res.status(200).json({
        status: 'success',
        data: { newTodo }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Patch update Todo given an Id
exports.patchIdTodo = async (req, res) => {
  try {
    //Variables
    const { id } = req.params;
    const { content } = req.body;
    const newContent = { content: content };
    const todo = await Todo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update todo, invalid ID'
      });
      return;
    }

    await todo.update({ ...newContent });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

// Delete Todo given an Id
exports.deleteIdTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id: id, status: 'active' } });
    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update todo, invalid ID'
      });
      return;
    }
    await todo.update({ status: 'delete' });
    res.status(204).json({
      status: 'success',
      message: 'Todo updated successfully'
    });
  } catch (error) {
    console.log(error);
  }
};
