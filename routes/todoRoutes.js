const express = require('express');
const todoRouter = express.Router();
const { createTodo, fetchTodos, deleteTodo, fetchSingleTodo, updateTodo } = require('../controllers/todoControllers');
const authVerify = require('../middlewares/auth');



todoRouter.get('/', fetchTodos);
todoRouter.get('/:id', fetchSingleTodo);
todoRouter.post('/create',authVerify, createTodo);
todoRouter.delete('/delete/:id', authVerify,deleteTodo);
todoRouter.put('/update', authVerify,updateTodo);

module.exports = todoRouter;