import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export interface Course {
  name: string;
  description: string;
  duration: number;
}

export const updateCourse = async (id: string, data: Course) => {
  return client.courses.update({ where: { id }, data });
};
