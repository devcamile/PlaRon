
📄 README.md

>>>>>>> 03364d5fe46d397de94fc7bf645f0ba213ced6f7
# ✅ Sistema de Controle de Tarefas com Autenticação

Este é um projeto simples de uma API para gerenciamento de tarefas com autenticação de usuários, construído com Node.js, Express e MongoDB.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Bcryptjs
- Dotenv
- Nodemon

---

## 📂 Estrutura do Projeto

todo-auth/
│
├── server.js # Arquivo principal
├── .env # Variáveis de ambiente
├── .gitignore
│
├── config/ # Conexão com MongoDB
│ └── db.js
│
├── models/ # Schemas do banco
│ ├── User.js
│ └── Task.js
│
├── controllers/ # Lógica de autenticação e tarefas
│ ├── authController.js
│ └── taskController.js
│
├── middleware/ # Middleware de verificação JWT
│ └── authMiddleware.js
│
├── routes/ # Rotas de autenticação e tarefas
│ ├── authRoutes.js
<<<<<<< HEAD
│ └── taskRoutes.js
=======
│ └── taskRoutes.js
>>>>>>> 03364d5fe46d397de94fc7bf645f0ba213ced6f7
