import express from 'express'
import db from './db.js'
import upload from 'uploadconfig.js'
import fs from 'fs'

const router = express.Router()

// POST → http://localhost:3000/api/pdfs
// Body → form-data → key: imagepdf (File)
// Inserir PDF
router.post('/pdfs', upload.single('imagepdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado" })
    }

    const filepath = req.file.path
    const filename = req.file.filename
    const originalname = req.file.originalname
    const filesize = req.file.size

    await db.execute(
      "INSERT INTO pdfs (nome, dth_criacao, tamanho_bytes, caminho_arquivo) VALUES (?, NOW(), ?, ?)",
      [originalname, filesize, filepath]
    )

    res.status(201).json({ 
      message: "PDF enviado com sucesso!",
      file: {
        nome: originalname,
        caminho: filepath,
        tamanho: filesize
      }
    })
  } catch (error) {
    // Remove o arquivo se houver erro no banco
    if (req.file) {
      fs.unlink(req.file.path, (err) => { if (err) console.warn("Erro ao remover:", err) })
    }
    res.status(500).json({ error: error.message })
  }
})

// GET → http://localhost:3000/api/pdfs
// Listar todos os PDFs
router.get('/pdfs', async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM pdfs ORDER BY dth_criacao DESC")
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST → http://localhost:3000/api/images
// Body → form-data → key: imagepdf (File)
// Inserir imagem
router.post('/images', upload.single('imagepdf'), async (req, res) => {
  try {
    const filepath = req.file.path
    await db.execute("INSERT INTO images (img) VALUES (?)", [filepath])
    res.status(201).json({ message: "Imagem enviada com sucesso!", img: filepath })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// GET → http://localhost:3000/api/images
// Listar imagens
router.get('/images', async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM images")
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// PUT → http://localhost:3000/api/images/:id
// Atualizar imagem
router.put('/images/:id', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params
    const newPath = req.file.path

    const [old] = await db.execute("SELECT * FROM images WHERE id = ?", [id])
    if (old.length === 0) return res.status(404).json({ error: "Imagem não encontrada" })

    const oldPath = old[0].img
    await db.execute("UPDATE images SET img = ? WHERE id = ?", [newPath, id])

    fs.unlink(oldPath, (err) => { if (err) console.warn("Erro ao remover:", err) })
    res.json({ message: "Imagem atualizada com sucesso!", img: newPath })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE → http://localhost:3000/api/images/:id
// Deletar imagem
router.delete('/images/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await db.execute("SELECT * FROM images WHERE id = ?", [id])
    if (rows.length === 0) return res.status(404).json({ error: "Imagem não encontrada" })

    const filePath = rows[0].img
    await db.execute("DELETE FROM images WHERE id = ?", [id])

    fs.unlink(filePath, (err) => { if (err) console.warn("Erro ao remover:", err) })
    res.json({ message: "Imagem excluída com sucesso!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router