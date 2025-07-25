import { BookModel } from '../Models/books.js'
import { CategoryModel } from '../Models/category.js'

export class bookController {
  static async addBook(req, res) {
    const { title, auth, category, editorial, publishDate } = req.body

    let checkCategory = await CategoryModel.findOne({ name: category })

    if (!checkCategory) {
      checkCategory = new CategoryModel({ name: category })
      await checkCategory.save()
    }

    const userID = req.user.id

    try {
      const newBook = new BookModel({
        title,
        auth,
        category: checkCategory._id,
        editorial,
        publishDate,
        createdBy: userID
      })

      await newBook.save()
      res.status(201).json({
        message: 'Book added successfully',
        book: newBook
      })
    } catch (error) {
      res.status(500).json({ message: 'Error adding book', error })
    }
  }

  static async getBooks(req, res) {
    const { title } = req.query
    try {
      const books = await BookModel.find({
        title: { $regex: title, $options: 'i' }
      })

      if (!books.length) {
        return res.status(404).json({ message: 'No books found' })
      }

      res.status(200).json(books)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching book', error })
    }
  }
}
