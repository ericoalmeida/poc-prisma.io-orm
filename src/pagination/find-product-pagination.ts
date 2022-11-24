import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const findProductPagination = (skip: number, take: number) => {
  return client.products.findMany({
    select: {
      id: true,
      name: true,
    },
    skip,
    take,
  });
};

export { findProductPagination };

