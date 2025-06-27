import express from 'express'
import dotenv from 'dotenv'
import { userRouter } from './Routes/users.js'
import { connectDB } from './database/database.js'
import cors from 'cors'
import { corsOptions } from './cors/cors.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors(corsOptions))

app.disable('x-powered-by')
app.use(express.json())

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Backend is lisen in this URL http://localhost:${PORT}`)
})

connectDB()
