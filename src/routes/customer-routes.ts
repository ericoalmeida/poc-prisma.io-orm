import { Router } from "express";

import { createCustomer } from "../customers/create-customer";
import { findAllCustomers } from "../customers/find-all-customers";
import { findCustomer } from "../customers/find-customer";

const customerRoutes = Router()

customerRoutes.post('/customer', async (request, response) => {
  const customer = await createCustomer(request.body)
  
  return response.json(customer)
})

customerRoutes.get('/customer/:id', async (request, response) => {
  const customer = await findCustomer(request.params.id)
  
  return response.json(customer)
})

customerRoutes.get('/customers', async (request, response) => {
  const customer = await findAllCustomers()
  
  return response.json(customer)
})


export { customerRoutes };
