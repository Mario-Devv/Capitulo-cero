import express from 'express'
import { userRouter } from './Routes/users.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Backend is lisen in this URL http://localhost:${PORT}`)
})
