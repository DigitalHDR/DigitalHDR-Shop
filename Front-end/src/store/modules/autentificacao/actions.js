export function autentificaLogin(cadastrado) {
  return {
    type: 'LOGIN',
    cadastrado,
  }
}

export function autentificaLogout(logout) {
  return {
    type: 'LOGOUT',
    logout,
  }
}
