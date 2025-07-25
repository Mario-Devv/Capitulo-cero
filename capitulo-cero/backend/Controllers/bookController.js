import { BookModel } from '../Models/books.js'

export class bookController {
  static async addBook (req, res) {
    const { title, auth, category, editorial, publishDate } = req.body

    try {
      const newBook = new BookModel({
        title,
        auth,
        category,
        editorial,
        publishDate
      })

      await newBook.save()
      res.status(201).json({
        message: 'Book added successfully',
        book: {
          id: newBook._id,
          title: newBook.title,
          auth: newBook.auth,
          category: newBook.category,
          editorial: newBook.editorial,
          publishDate: newBook.publishDate
        }
      })
    } catch (error) {
      res.status(500).json({ message: 'Error adding book', error })
    }
  }
}
