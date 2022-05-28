//scr/store/modules/rootReducer
import { combineReducers } from 'redux'

import carrinho from './carrinho/reducer'
import autentificacao from './autentificacao/reducer'

export default combineReducers({
  carrinho,
  autentificacao,
})
