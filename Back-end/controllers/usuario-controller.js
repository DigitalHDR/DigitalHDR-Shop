import Usuario from '../models/Usuario'
import bcrypt from 'bcryptjs'

export const TodosUsuarios = async (req, res, next) => {
  let usuarios
  try {
    usuarios = await Usuario.find()
  } catch (err) {
    console.log(err)
  }
  if (!usuarios) {
    return res.status(404).json({ message: 'Usuário não existe' })
  }
  return res.status(200).json({ usuarios })
}

export const CadastrarUsuario = async (req, res, next) => {
  const { nome, email, senha } = req.body
  let usuarioExiste
  try {
    usuarioExiste = await Usuario.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (usuarioExiste) {
    return res.status(400).json({ message: 'Usuário já Existe!' })
  }

  const hashSenha = bcrypt.hashSync(senha)
  const novoUsuario = new Usuario({
    nome,
    email,
    senha: hashSenha,
  })
  try {
    await novoUsuario.save()
  } catch (err) {
    return console.log(err)
  }
  return res.status(201).json({ novoUsuario })
}
