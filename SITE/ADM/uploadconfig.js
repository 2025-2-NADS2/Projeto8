import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Cria as pastas automaticamente, caso não existam
const uploadsDir = 'uploads'
const pdfDir = 'uploads/PDF'

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir)
}
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Salva PDFs na pasta PDF, imagens na pasta uploads
    const dest = file.mimetype === 'application/pdf' ? pdfDir : uploadsDir
    cb(null, dest)
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    const name = `${Date.now()}-${Math.floor(Math.random() * 1E9)}${ext}`
    cb(null, name)
  }
})

const fileFilter = (req, file, cb) => {
  const allowed = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg', 'image/gif']
  allowed.includes(file.mimetype) ? cb(null, true) : cb(new Error('Arquivo inválido. Apenas PDF e imagens são permitidos.'))
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
})

export default upload