import Express, { json } from 'express'

import { routes } from './routes'

const app = Express()

app.use(json())
app.use(routes)

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000")
})