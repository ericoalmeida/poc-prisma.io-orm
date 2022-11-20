import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findCustomer = (id: string) => {
  return client.customers.findFirst({ where: { id } });
};
