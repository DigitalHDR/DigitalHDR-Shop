import React from 'react';
import { MdAdd, MdRemove, MdDeleteOutline } from 'react-icons/md';
import formataDinheiro from '../../functions/dinheiroFormatado';
import { useDispatch } from 'react-redux';
import { removeItem, atualizaItem } from '../../store/modules/carrinho/actions';

export default function CartListProduto(porps) {
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeItem(id));
  }

  function decrementa(item) {
    dispatch(atualizaItem(item.id, item.quantidade - 1));
  }

  function incrementa(item) {
    dispatch(atualizaItem(item.id, item.quantidade + 1));
  }

  return (
    <div className="card_carrinho" key={porps.index}>
      <div className="container_img_carrinho">
        <img src={porps.item.imagem} alt={porps.item.titulo} />
      </div>
      <div className="container_descricao_carrinho">
        <div className="box_titulo_descricao">
          <div className="box_titulo_btnDelete">
            <h3 className="titulo_carrinho">
              {porps.item.titulo.substring(0, 60)}
            </h3>
            <div onClick={() => handleRemove(porps.item.id)}>
              <MdDeleteOutline className="btnDelete" />
            </div>
          </div>
          <p>{porps.item.descricao}</p>
        </div>
        <div className="box_preco_btn">
          <div>
            <span className="preco_carrinho">
              {formataDinheiro(porps.item.preco)}
            </span>
          </div>
          <div className="btn_carrinho">
            <button
              className="btn_add_remove"
              onClick={() => decrementa(porps.item)}
            >
              <MdRemove className="btnRemove" />
            </button>
            <input type="text" readOnly value={porps.item.quantidade} />
            <button
              className="btn_add_remove"
              onClick={() => incrementa(porps.item)}
            >
              <MdAdd className="btnAdd" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
