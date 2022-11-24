import { Router } from "express";

import { createProduct } from "../products/create-product";
import { deleteProduct } from "../products/delete-product";
import { findAllProducts } from "../products/find-all-products";
import { findProduct } from "../products/find-product";
import { updateProduct } from "../products/update-product";

const productRoutes = Router();

productRoutes.post("/product", async (request, response) => {
  try {
    const product = await createProduct(request.body);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

productRoutes.put("/product/:id", async (request, response) => {
  try {
    const product = await updateProduct(request.params.id, request.body);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

productRoutes.delete("/product/:id", async (request, response) => {
  try {
    const product = await deleteProduct(request.params.id);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

productRoutes.get("/product/:id", async (request, response) => {
  try {
    const product = await findProduct(request.params.id);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

productRoutes.get("/products", async (request, response) => {
  try {
    const products = await findAllProducts();

    return response.json(products);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { productRoutes };
