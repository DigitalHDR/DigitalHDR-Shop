import express from 'express'

import { TodosUsuarios } from '../controllers/usuario-controller'

const router = express.Router()

router.get('/', TodosUsuarios)

export default router