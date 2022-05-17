//scr/store/modules/rootReducer
import { combineReducers } from 'redux';

import carrinho from './carrinho/reducer';

export default combineReducers({
  carrinho,
});
