//scr/store/modules/carrinho/actions
export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  };
}

export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    id
  }
}

export function atualizaItem(id, quantidade) {
  return {
    type: 'ATUALIZA_ITEM',
    id,
    quantidade,
  };
}