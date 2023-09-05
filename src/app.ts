import express from "express";
import { createTodo, deleteTodo, editTodo, getTodoById, getTodos } from "./logic";
import { validation } from "./middlewares/validation";
import { createTodoValidation } from "./schemas/createTodoValidation";
import { isTodoIdValid } from "./middlewares/isTodoIdValid";
import { editTodoValidation } from "./schemas/editTodoValidation";

const app = express();

app.use(express.json());

app.get("/", getTodos);

app.get("/:todoId", isTodoIdValid, getTodoById);

app.post("/", validation(createTodoValidation), createTodo);

app.delete("/:todoId", isTodoIdValid, deleteTodo);

app.put("/:todoId", validation(editTodoValidation), isTodoIdValid, editTodo);

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});
