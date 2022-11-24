import { Router } from "express";

import { updateCourseCustomerAndProduct } from "../db-transactions/update-course-customer-and-product";

const dbTransactionRoutes = Router();

dbTransactionRoutes.put("/db-transaction", async (request, response) => {
  try {
    const result = await updateCourseCustomerAndProduct(request.body);

    return response.json(result);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { dbTransactionRoutes };
