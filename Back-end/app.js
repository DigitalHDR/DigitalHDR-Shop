import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import router from './routes/usuario-routes' 

const app = express()
app.use(cors())

app.use('/api/TodosUsuarios', router)

const mongoDbUrl = process.env.MONGODB_URL

mongoose
  .connect(mongoDbUrl)
  .then(() => app.listen(5000))
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.log(err))
