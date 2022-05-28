export default function autentificacao(state = false, action) {
    console.log(state)
    console.log(action)

    switch (action.type) {
        case 'LOGIN_OU_LOGOUT':
            return state = true
        default:
            return state
    }
}