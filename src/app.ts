import express from "express";
import { createTodo, getTodoById, getTodos } from "./logic";
import { validation } from "./middlewares/validation";
import { createTodoValidation } from "./schemas/createTodoValidation";

const app = express();

app.use(express.json());

app.get("/", getTodos);

app.get("/:todoId", getTodoById);

app.post("/", validation(createTodoValidation), createTodo);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})