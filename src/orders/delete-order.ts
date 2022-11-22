import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const deleteOrder = (id: string) => {
  return client.orders.delete({ where: { id } });
};
