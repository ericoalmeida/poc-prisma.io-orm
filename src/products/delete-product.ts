import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const deleteProduct = (id: string) => {
  return client.products.delete({ where: { id } });
};
