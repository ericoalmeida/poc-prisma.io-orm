import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

interface OrderItem {
  product_id: string;
  amount: number;
  total: number;
}

interface Order {
  date: Date;
  total: number;
  customer_id: string;
  items: OrderItem[];
}

export const createOrder = (data: Order) => {
  const { date, total, items, customer_id } = data;

  return client.orders.create({
    data: {
      date: new Date(date),
      total,
      customer_id,
      items: {
        create: items,
      },
    },
  });
};
