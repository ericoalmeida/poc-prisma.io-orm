import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findOrder = async (id: string) => {
  return client.orders.findFirst({ where: { id } });
};
