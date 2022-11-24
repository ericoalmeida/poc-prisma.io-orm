import { Router } from "express";

import { createCustomer } from "../customers/create-customer";
import { deleteCustomer } from "../customers/delete-customer";
import { findAllCustomers } from "../customers/find-all-customers";
import { findCustomer } from "../customers/find-customer";
import { updateCustomer } from "../customers/update-customer";

const customerRoutes = Router();

customerRoutes.post("/customer", async (request, response) => {
  try {
    const customer = await createCustomer(request.body);

    return response.json(customer);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

customerRoutes.put("/customer/:id", async (request, response) => {
  try {
    const customer = await updateCustomer(request.params.id, request.body);

    return response.json(customer);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

customerRoutes.delete("/customer/:id", async (request, response) => {
  try {
    const customer = await deleteCustomer(request.params.id);

    return response.json(customer);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

customerRoutes.get("/customer/:id", async (request, response) => {
  try {
    const customer = await findCustomer(request.params.id);

    return response.json(customer);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

customerRoutes.get("/customers", async (request, response) => {
  try {
    const customer = await findAllCustomers();

    return response.json(customer);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { customerRoutes };
