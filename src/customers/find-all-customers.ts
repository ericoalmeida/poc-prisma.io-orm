import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findAllCustomers = () => {
  return client.customers.findMany();
};
