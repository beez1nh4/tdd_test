import express, {json} from "express";
import "express-async-errors";
import studentsRouter from "routers/students-router";

const app = express();

app.use(json());

app.use(studentsRouter)

export default app;