import { Student } from "@prisma/client";
import studentRepository from "repositories/students-repository";

export type StudentInput = Omit<Student, "id">;

async function getStudents() {
  const students = await studentRepository.getStudents();
  if (students.length === 0) {
    throw { message: "Students not found." }
  }
  return students;
}

async function getOneStudent() {

  const students = await getStudents();
  if (!students) {
    throw { message: "Students not found." }
  }  
  const student = await studentRepository.getOneStudent(students[0].id);
  if (!student) {
    throw { message: "Students not found." }
  }

  return student;
}

async function createStudent(student: StudentInput) {
  const studentAlreadyRegistered = await studentRepository.getSpecificStudentByName(student.name);
  if (studentAlreadyRegistered) {
    throw { message: "This game already exists!" }
  }

  await studentRepository.insertStudent(student);
}

const studentsService = {
  getStudents,
  getOneStudent,
  createStudent
}

export default studentsService;