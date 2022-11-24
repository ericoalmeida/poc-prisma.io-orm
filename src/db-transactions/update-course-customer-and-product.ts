import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

interface CourseCustomerProductData {
  course: {
    id: string;
    data: {
      name: string;
      description: string;
      duration: number;
    };
  };
  customer: {
    id: string;
    data: {
      name: string;
    };
  };
  product: {
    id: string;
    data: {
      name: string;
    };
  };
}

const updateCourseCustomerAndProduct = (data: CourseCustomerProductData) => {
  const { course, customer, product } = data;

  const updateCourse = client.courses.update({
    where: { id: course.id },
    data: course.data,
  });

  const updateCustomer = client.customers.update({
    where: { id: customer.id },
    data: customer.data,
  });

  const updateProduct = client.products.update({
    where: { id: product.id },
    data: product.data,
  });

  return client.$transaction([updateCourse, updateCustomer, updateProduct]);
};

export { updateCourseCustomerAndProduct };
