const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// Todas as rotas abaixo precisam do token válido
router.use(authMiddleware);

// Criar uma nova tarefa
router.post('/', taskController.createTask);

// Listar todas as tarefas do usuário
router.get('/', taskController.getTasks);

// Atualizar uma tarefa pelo ID
router.put('/:id', taskController.updateTask);

// Deletar uma tarefa pelo ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
