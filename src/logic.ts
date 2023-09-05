import { Request, Response } from "express";
import { todoDatabase } from "./database";
import { v4 as uuidv4 } from 'uuid';

export const getTodos = (req: Request, res: Response) => {
    return res.status(200).json(todoDatabase);
}

export const getTodoById = (req: Request, res: Response) => {
    const foundTodo = todoDatabase.find(todo => todo.id === req.params.todoId);

    if(!foundTodo){
        return res.status(404).json({ message: "Not found any todo with this id"});
    }

    return res.status(200).json(foundTodo);
}

export const createTodo = (req: Request, res: Response) => {
    const newTodo = { id: uuidv4(), title: req.body.title, content: req.body.content };
    todoDatabase.push(newTodo);

    return res.status(201).json({ message: "Todo sucessfuly created.", todo: newTodo});
}