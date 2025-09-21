// controllers/ContactController.js
const ContactModel = require('../models/ContactModel');

class ContactController {
  static create(req, res) {
    console.log('Recebido do frontend:', req.body); // Para depuração

    const { nome, email, telefone, assunto, mensagem } = req.body;

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return res.status(400).json({ msg: 'Preencha todos os campos obrigatórios.' });
    }

    const newContact = { nome, email, telefone, assunto, mensagem };

    ContactModel.create(newContact, (err, result) => {
      if (err) {
        console.error('Erro ao salvar contato:', err);
        return res.status(500).json({ msg: 'Erro no servidor' });
      }
      res.status(201).json({ msg: 'Contato salvo com sucesso!', id: result.insertId });
    });
  }
}

module.exports = ContactController;
