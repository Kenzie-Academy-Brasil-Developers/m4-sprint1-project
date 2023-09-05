import { NextFunction, Request, Response } from "express";
import { todoDatabase } from "../database";

export const isTodoIdValid = (req: Request, res: Response, next: NextFunction) => {
    const foundTodo = todoDatabase.find(todo => todo.id === req.params.todoId);

    if(!foundTodo){
        return res.status(404).json({ message: "Not found any todo with this id"});
    }

    res.locals.foundTodo = foundTodo 

    return next();
}