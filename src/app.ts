import express from "express";
import { getTodos } from "./logic";

const app = express();

app.use(express.json());

app.get("/", getTodos);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})