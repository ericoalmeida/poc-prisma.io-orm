import { Router } from "express";

import { createOrder } from "../orders/create-order";

const orderRoutes = Router()

orderRoutes.post('/order', async (request, response) => {
  const order = await createOrder(request.body)

  return response.json(order)
})


export { orderRoutes };
