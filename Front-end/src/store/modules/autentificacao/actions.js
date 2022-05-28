export function autentificaLoginLogout(cadastrado) {
  return {
    type: 'LOGIN_OU_LOGOUT',
    cadastrado,
  }
}
