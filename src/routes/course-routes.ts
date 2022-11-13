import { Router } from "express";

import { createCourse } from "../courses/create-course";

const courseRoutes = Router()

courseRoutes.post('/course', async (request, response) => {
  const course = await createCourse(request.body)

  return response.json(course)
})


export { courseRoutes };
