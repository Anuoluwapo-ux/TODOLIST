import { Router } from "express";
import todoController from "../controllers/todoController.js";
import auth from "../middlewares/auth.js";

export const todoRouters = Router();

todoRouters.post('/create', auth, todoController.createTodo);
todoRouters.delete('/delete/:id', auth, todoController.deleteTodo);
// todoRouters.put('/logout', todoController.logout);
todoRouters.get('/todos', todoController.getAllTodo);
todoRouters.get('/mytodos', auth, todoController.getMyTodo);
