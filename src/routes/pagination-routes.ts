import { Router } from "express";

import { findProductPagination } from "../pagination/find-product-pagination";

const paginationRoutes = Router();

paginationRoutes.get("/pagination/product", async (request, response) => {
  try {
    const result = await findProductPagination(
      Number(request.query.skip),
      Number(request.query.take)
    );

    return response.json(result);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { paginationRoutes };
