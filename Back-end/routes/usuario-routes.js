import express from 'express'

import {
  CadastrarUsuario,
  LoginUsuario,
  TodosUsuarios,
} from '../controllers/usuario-controller.js'

const router = express.Router()

router.get('/', TodosUsuarios)
router.post('/Cadastrar', CadastrarUsuario)
router.post('/login', LoginUsuario)

export default router
