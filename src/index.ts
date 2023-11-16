const express = require('express')
const port = 3000
const app = express()
import userRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
// respond with "hello world" when a GET request is made to the homepage
// middleware that is specific to this router

app.use(express.json()) //middleware để xử lý json
app.use("/user", userRouter)

databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})