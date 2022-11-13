import { Router } from "express";

import { courseRoutes } from "./course-routes";

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ status: true })
})

routes.use(courseRoutes)

export { routes };
