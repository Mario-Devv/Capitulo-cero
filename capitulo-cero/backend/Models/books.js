import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  auth: { type: String },
  category: { type: String },
  editorial: { type: String },
  publishDate: { type: Date }
})

export const BookModel = mongoose.model('Book', bookSchema)
