import { getStudents, getOneStudent, createStudent } from "controllers/students-controller";
import { Router } from "express";
import { validateSchemaMiddleware } from "middlewares/schema-validate-middleware";
import { studentSchema } from "schemas/student-schema";

const studentsRouter = Router();

studentsRouter.get("/students", getStudents);
studentsRouter.get("/students/pick", getOneStudent);
studentsRouter.post("/students", validateSchemaMiddleware(studentSchema),createStudent);

export default studentsRouter;