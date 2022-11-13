import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export interface Course {
  name: string;
  description: string;
  duration: number;
}

export const createCourse = async (data: Course) => {
  return client.courses.create({ data })
}