import { Router } from "express";

import { createCourse } from "../courses/create-course";
import { deleteCourse } from "../courses/delete-course";
import { findAllCourses } from "../courses/find-all-courses";
import { findCourse } from "../courses/find-course";
import { updateCourse } from "../courses/update-course";

const courseRoutes = Router();

courseRoutes.post("/course", async (request, response) => {
  try {
    const course = await createCourse(request.body);

    return response.json(course);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

courseRoutes.put("/course/:id", async (request, response) => {
  try {
    const course = await updateCourse(request.params.id, request.body);

    return response.json(course);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

courseRoutes.delete("/course/:id", async (request, response) => {
  try {
    const course = await deleteCourse(request.params.id);

    return response.json(course);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

courseRoutes.get("/course/:id", async (request, response) => {
  try {
    const course = await findCourse(request.params.id);

    return response.json(course);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

courseRoutes.get("/courses", async (request, response) => {
  try {
    const course = await findAllCourses();

    return response.json(course);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

export { courseRoutes };
