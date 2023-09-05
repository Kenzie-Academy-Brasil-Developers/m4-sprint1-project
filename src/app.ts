import express from "express";
import { createTodo, getTodoById, getTodos } from "./logic";

const app = express();

app.use(express.json());

app.get("/", getTodos);

app.get("/:todoId", getTodoById);

app.post("/", createTodo);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})