import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

interface Customer {
  name: string;
}

export const updateCustomer = (id: string, data: Customer) => {
  return client.customers.update({ where: { id }, data });
};
