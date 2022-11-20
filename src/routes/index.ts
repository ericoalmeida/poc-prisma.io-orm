import { Router } from "express";

import { courseRoutes } from "./course-routes";
import { customerRoutes } from "./customer-routes";

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ status: true })
})

routes.use(courseRoutes)
routes.use(customerRoutes)

export { routes };
