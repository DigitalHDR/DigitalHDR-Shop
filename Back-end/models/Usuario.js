import mongoose from 'mongoose'

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
    minlength: 6,
  },
})

export default mongoose.model('Usuario', usuarioSchema)
