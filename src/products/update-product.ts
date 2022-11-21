import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

interface Product {
  name: string;
}

export const updateProduct = (id: string, data: Product) => {
  return client.products.update({ where: { id }, data });
};
