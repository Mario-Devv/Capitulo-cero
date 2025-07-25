import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URI = process.env.MONGO_URI

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB successfully')
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error.message}`)
  }
}
