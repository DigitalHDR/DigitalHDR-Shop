import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import router from './routes/usuario-routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/TodosUsuarios', router)

const mongoDbUrl = process.env.MONGODB_URL
const port = process.env.PORT || 5000

mongoose
  .connect(mongoDbUrl)
  .then(() => app.listen(port))
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.log(err))
