import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname
        cb(null, uniqueName)
    }
})

const fileFilter = (req, file, cb) => {
    const allowTypes = ['image/jpeg', 'image/png', 'image/jpg']

    if (allowTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error('Formato no permitido, debe de ser jpeg, png o jpg'), false)
    }
}

export const upload = multer({
    storage,
    fileFilter
})
