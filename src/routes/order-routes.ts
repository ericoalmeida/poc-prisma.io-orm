import { Router } from "express";

import { createOrder } from "../orders/create-order";
import { deleteOrder } from "../orders/delete-order";
import { findAllOrders } from "../orders/find-all-orders";
import { findOrder } from "../orders/find-order";
import { updateOrder } from "../orders/update-order";

const orderRoutes = Router();

orderRoutes.post("/order", async (request, response) => {
  const order = await createOrder(request.body);

  return response.json(order);
});

orderRoutes.get("/order/:id", async (request, response) => {
  const orders = await findOrder(request.params.id);

  return response.json(orders);
});

orderRoutes.put("/order/:id", async (request, response) => {
  const orders = await updateOrder(request.params.id, request.body);

  return response.json(orders);
});

orderRoutes.delete("/order/:id", async (request, response) => {
  const orders = await deleteOrder(request.params.id);

  return response.json(orders);
});

orderRoutes.get("/orders", async (request, response) => {
  const orders = await findAllOrders();

  return response.json(orders);
});

export { orderRoutes };
