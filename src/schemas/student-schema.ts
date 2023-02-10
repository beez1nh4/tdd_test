import joi from "joi";
import { StudentInput } from "services/students-service";

export const studentSchema = joi.object<StudentInput>({
  name: joi.string().required(),
});