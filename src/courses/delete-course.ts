import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const deleteCourse = async (id: string) => {
  return client.courses.delete({ where: { id } });
};
