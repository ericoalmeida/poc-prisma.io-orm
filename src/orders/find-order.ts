import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const findOrder = async (id: string) => {
  return client.orders.findFirst({
    where: { id },
    select: {
      id: true,
      date: true,
      customer_id: true,
      total: true,
      items: {
        select: {
          product_id: true,
          amount: true,
          total: true,
        },
      },
    },
  });
};
