import prisma from "../config/database";
import { StudentInput } from "services/students-service";

async function getStudents() {
  return await prisma.student.findMany();
}

async function getOneStudent(id: number) {
  return await prisma.student.findFirst({
    where: { id }
  })
}

async function insertStudent(student: StudentInput) {
  return await prisma.student.create({
    data: student
  })
}

async function getSpecificStudentByName(name: string) {
    return await prisma.student.findFirst({
      where: {
        name
      }
    })
  }

const studentRepository = {
  getStudents,
  getOneStudent,
  insertStudent,
  getSpecificStudentByName
}

export default studentRepository;