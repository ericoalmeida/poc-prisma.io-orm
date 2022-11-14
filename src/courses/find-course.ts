import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findCourse = async (id: string) => {
  return client.courses.findFirst({ where: { id }});
};
