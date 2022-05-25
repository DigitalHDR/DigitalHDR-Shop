import express from 'express'

import { retornaTodosUsuarios } from '../controllers/usuario-controller'

const router = express.Router()

router.get('/', retornaTodosUsuarios)

export default router