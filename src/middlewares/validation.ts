import { Request, Response, NextFunction } from "express";

export const validation = () => {
    return (req: Request, res: Response, next: NextFunction) => {
    const errors = [];

    if(!req.body.title){
        errors.push("Title is required");
    }

    if(!req.body.content){
        errors.push("Content is required");
    }

    if(errors.length > 0){
        return res.status(422).json({ errors });
    }

    return next();
}}