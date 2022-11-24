import { Router } from "express";

import { courseRoutes } from "./course-routes";
import { customerRoutes } from "./customer-routes";
import { dbTransactionRoutes } from "./db-transactions-routes";
import { orderRoutes } from "./order-routes";
import { paginationRoutes } from "./pagination-routes";
import { productRoutes } from "./product-routes";
import { queryRawRoutes } from "./query-raw-routes";

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ status: true })
})

routes.use(courseRoutes)
routes.use(customerRoutes)
routes.use(productRoutes)
routes.use(orderRoutes)
routes.use(dbTransactionRoutes)
routes.use(queryRawRoutes)
routes.use(paginationRoutes)

export { routes };
