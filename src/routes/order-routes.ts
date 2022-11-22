import { Router } from "express";

import { createOrder } from "../orders/create-order";
import { findAllOrders } from "../orders/find-all-orders";
import { findOrder } from "../orders/find-order";

const orderRoutes = Router()

orderRoutes.post('/order', async (request, response) => {
  const order = await createOrder(request.body)

  return response.json(order)
})

orderRoutes.get('/orders/:id', async (request, response) => {
  const orders = await findOrder(request.params.id)

  return response.json(orders)
})

orderRoutes.get('/orders', async (request, response) => {
  const orders = await findAllOrders()

  return response.json(orders)
})


export { orderRoutes };
