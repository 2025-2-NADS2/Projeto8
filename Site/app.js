// app.js
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rota principal
app.use('/api/contacts', contactRoutes);

// Servidor na porta 5000
const PORT = 5173;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

