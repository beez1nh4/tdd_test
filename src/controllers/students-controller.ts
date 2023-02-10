import { Request, Response } from "express";
import httpStatus from "http-status";
import studentsService, { StudentInput } from "services/students-service";


export async function getStudents(req: Request, res: Response) {
  try{
    const students = await studentsService.getStudents();
    res.send(students);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getOneStudent(req: Request, res: Response) {
  try {
    const student = await studentsService.getOneStudent();
    res.send(student);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function createStudent(req: Request, res: Response) {
  const student = req.body as StudentInput;
  try {
    await studentsService.createStudent(student);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
}