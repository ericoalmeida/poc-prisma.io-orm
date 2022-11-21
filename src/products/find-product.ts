import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findProduct = (id: string) => {
  return client.products.findFirst({ where: { id } });
};
