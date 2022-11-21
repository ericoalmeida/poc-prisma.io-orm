import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findAllProducts = () => {
  return client.products.findMany();
};
