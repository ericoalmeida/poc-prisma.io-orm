import { Router } from "express";

import { createCustomer } from "../customers/create-customer";
import { findAllCustomers } from "../customers/find-all-customers";

const customerRoutes = Router()

customerRoutes.post('/customer', async (request, response) => {
  const customer = await createCustomer(request.body)
  
  return response.json(customer)
})

customerRoutes.get('/customers', async (request, response) => {
  const customer = await findAllCustomers()
  
  return response.json(customer)
})


export { customerRoutes };
