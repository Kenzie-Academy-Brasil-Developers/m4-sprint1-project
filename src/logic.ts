import { Request, Response } from "express";
import { todoDatabase } from "./database";
import { v4 as uuidv4 } from 'uuid';

export const getTodos = (req: Request, res: Response) => {
    return res.status(200).json(todoDatabase);
}

export const getTodoById = (req: Request, res: Response) => {
    return res.status(200).json(res.locals.foundTodo);
}

export const createTodo = (req: Request, res: Response) => {
    const newTodo = { id: uuidv4(), title: req.body.title, content: req.body.content };
    todoDatabase.push(newTodo);

    return res.status(201).json({ message: "Todo sucessfully created", todo: newTodo});
}

export const deleteTodo = (req: Request, res: Response) => {
    const index = todoDatabase.findIndex(todo => todo.id === req.params.todoId);   
    
    todoDatabase.splice(index, 1);

    return res.status(200).json({ message: "Todo sucessfully removed" })
}

export const editTodo = (req: Request, res: Response) => {
    const index = todoDatabase.findIndex(todo => todo.id === req.params.todoId);

    const newTodo = { id: req.params.todoId, title: req.body.title, content: req.body.title };

    todoDatabase.splice(index, 1, newTodo);

    return res.status(200).json({ message: "Todo sucessfully edited", todo: newTodo});
}