"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo_1 = require("../model/Todo");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo fue creado...', createTodo: newTodo });
};
exports.getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.updateTodos = function (req, res, next) {
    var todoId = req.params.id;
    var updatedText = req.body.text;
    var index = TODOS.findIndex(function (todo) { return todo.id == todoId; });
    if (index < 0) {
        throw new Error('Todo no fue encontrado..');
    }
    TODOS[index] = new Todo_1.Todo(TODOS[index].id, updatedText);
    res.status(201).json({ message: 'Actualizado', updateTodos: TODOS[index] });
};
exports.deleteTodos = function (req, res, next) {
    var todoId = req.params.id;
    var index = TODOS.findIndex(function (todo) { return todo.id == todoId; });
    if (index < 0) {
        throw new Error('Todo no fue encontrado');
    }
    TODOS.splice(index, 1);
    res.json({ message: 'Eliminado' });
};
