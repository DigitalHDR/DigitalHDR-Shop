export default function autentificacao(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return (state = true)
      
    case 'LOGOUT':
      state = localStorage.removeItem('tokenUsuario')
      return state.cadastrado = false

    default:
      return state
  }
}
