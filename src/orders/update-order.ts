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

export const updateOrder = async (id: string, data: Order) => {
  const { customer_id, date, items, total } = data;

  return client.orders.update({
    where: { id },
    data: {
      date: new Date(date),
      customer_id,
      total,
      items: {
        deleteMany: {
          order_id: id,
        },
        create: items,
      },
    },
  });
};
