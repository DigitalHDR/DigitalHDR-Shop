//scr/store/modules/carrinho
import produce from 'immer';

export default function carrinho(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.item.id);
        if (itemIndex >= 0) {
          draft[itemIndex].data += 1;
        } else {
          draft.push({
            ...action.item,
            quantidade: 1,
          });
        }
      });

    case 'REMOVE_ITEM':
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.id);
        if ((itemIndex) >= 0) {
          draft.splice(itemIndex, 1);
        }
      });

    case 'ATUALIZA_ITEM': {
      if (action.quantidade <= 0) {
        return state;
      }
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.id);
        if ((itemIndex) >= 0) {
          draft[itemIndex].quantidade = Number(action.quantidade);
        }
      });
    }
    default:
      return state;
  }
}
