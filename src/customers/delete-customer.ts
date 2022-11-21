import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const deleteCustomer = (id: string) => {
  return client.customers.delete({ where: { id } });
};
