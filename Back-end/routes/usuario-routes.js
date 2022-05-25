import express from 'express'

import {
  CadastrarUsuario,
  TodosUsuarios,
} from '../controllers/usuario-controller'

const router = express.Router()

router.get('/', TodosUsuarios)
router.post('/Cadastrar', CadastrarUsuario)

export default router
