import { Customers, Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient()

const findCustomerQueryRaw = (id: string) => {
  return client.$queryRaw<Customers>(
    Prisma.sql`
      SELECT
        ctm.id,
        ctm.name
      FROM customers ctm
      WHERE ctm.id = ${id}
    `
  )
}

export { findCustomerQueryRaw };
