import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export interface Product{
  name: string;
}

export const createProduct = (data: Product) => {
  return client.products.create({ data })
}