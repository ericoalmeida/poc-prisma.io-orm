import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findAllCourses = async () => {
  return client.courses.findMany();
};
