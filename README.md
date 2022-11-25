# Proof of concept Prisma ORM

## Objective

Learn how to use Prisma ORM and identify its advantages and disadvantages

## Libraries

- Express
- Typescript
- Nodemon
- Prisma

## Databases

- SQLite

### Can another database be used?

Yes, to use other database check the following steps:

- Change database provider in `prisma/schema.prisma` at line 6 (`provider = "sqlite"`)
  - Accepted options: **"sqlite"**, **"mysql"**, **"postgresql"**, **"sqlserver"**, **"mongodb"**, **"cockroachdb"**
  - For more details,access [Prisma/Database connectors](https://www.prisma.io/docs/concepts/database-connectors)

## How to run this project

### Pre-requisites

- Install the dependencies

```bash
npm install
```

- Setting up the environments
  - Make a copy of `.env.example` and rename it to `.env`
  - Set the `DATABASE_URL` with url from the database

- Import `Insomnia_collection.json` in your insomnia

### Run the project

- Run

```bash
npm run start:dev
```

- All routes are available in `Insomnia_collection.json` file
