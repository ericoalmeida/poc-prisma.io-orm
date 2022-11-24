import { Router } from "express";

import { findCustomerQueryRaw } from "../query-raw/find-customer-query-raw";

const queryRawRoutes = Router();

queryRawRoutes.get("/query-raw/customer/:id", async (request, response) => {
  try {
    const result = await findCustomerQueryRaw(request.params.id);

    return response.json(result);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { queryRawRoutes };
