// routes/contactRoutes.js
const express = require('express');
const ContactController = require('../controllers/ContactController');

const router = express.Router();

router.post('/', ContactController.create);

module.exports = router;
