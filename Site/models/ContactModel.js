// models/ContactModel.js
const db = require('../db'); // ajuste o caminho conforme necessário

class ContactModel {
  static create(contact, callback) {
    // Atenção: os nomes das colunas devem bater com seu banco
    const sql = `
      INSERT INTO contatos (nome, email, telefone, assunto, mensagem)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [contact.nome, contact.email, contact.telefone, contact.assunto, contact.mensagem],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      }
    );
  }
}

module.exports = ContactModel;
