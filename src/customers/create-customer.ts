import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export interface Customer{
  name: string;
}

export const createCustomer = (data: Customer) => {
  return client.customers.create({ data })
}