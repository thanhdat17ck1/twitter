const express = require('express')
const port = 3000
const app = express()
import userRouter from '~/user.routes'
// respond with "hello world" when a GET request is made to the homepage
// middleware that is specific to this router


app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})