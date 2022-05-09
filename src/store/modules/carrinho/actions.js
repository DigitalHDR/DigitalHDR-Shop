//scr/store/modules/carrinho/actions
export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  };
}