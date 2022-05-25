import Usuario from '../models/Usuario'

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
