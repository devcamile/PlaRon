const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Exemplo de rota protegida para pegar tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; // <-- ESSENCIAL!
