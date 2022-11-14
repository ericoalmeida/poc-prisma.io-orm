import { Router } from "express";

import { createCourse } from "../courses/create-course";
import { deleteCourse } from "../courses/delete-course";
import { findAllCourses } from "../courses/find-all-courses";
import { findCourse } from "../courses/find-course";
import { updateCourse } from "../courses/update-course";

const courseRoutes = Router()

courseRoutes.post('/course', async (request, response) => {
  const course = await createCourse(request.body)

  return response.json(course)
})

courseRoutes.put('/course/:id', async (request, response) => {
  const course = await updateCourse(request.params.id, request.body)

  return response.json(course)
})


courseRoutes.delete('/course/:id', async (request, response) => {
  const course = await deleteCourse(request.params.id)

  return response.json(course)
})

courseRoutes.get('/course/:id', async (request, response) => {
  const course = await findCourse(request.params.id)

  return response.json(course)
})

courseRoutes.get('/courses', async (request, response) => {
  const course = await findAllCourses()

  return response.json(course)
})


export { courseRoutes };
