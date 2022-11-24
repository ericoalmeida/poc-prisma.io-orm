import { Router } from "express";

import { createOrder } from "../orders/create-order";
import { deleteOrder } from "../orders/delete-order";
import { findAllOrders } from "../orders/find-all-orders";
import { findOrder } from "../orders/find-order";
import { updateOrder } from "../orders/update-order";

const orderRoutes = Router();

orderRoutes.post("/order", async (request, response) => {
  try {
    const order = await createOrder(request.body);

    return response.json(order);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

orderRoutes.get("/order/:id", async (request, response) => {
  try {
    const orders = await findOrder(request.params.id);

    return response.json(orders);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

orderRoutes.put("/order/:id", async (request, response) => {
  try {
    const orders = await updateOrder(request.params.id, request.body);

    return response.json(orders);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

orderRoutes.delete("/order/:id", async (request, response) => {
  try {
    const orders = await deleteOrder(request.params.id);

    return response.json(orders);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

orderRoutes.get("/orders", async (request, response) => {
  try {
    const orders = await findAllOrders();

    return response.json(orders);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { orderRoutes };
