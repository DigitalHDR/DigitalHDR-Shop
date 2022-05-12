//scr/pages/carrinho
import React from 'react';
import './styles.css';
import { MdAdd, MdRemove, MdDeleteOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import formataDinheiro from '../../functions/dinheiroFormatado';
import carrinhoVazio from '../../functions/carrinhoVazio';
import TituloDaPagina from '../../components/TitiloDaPagina';
import { removeItem, atualizaItem } from '../../store/modules/carrinho/actions';

export default function Carrinho() {
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

  const itensAdicionados = useSelector((state) => state.carrinho);
  return (
    <div className="container_global">
      <TituloDaPagina>Lista de Ítens no Carrinho</TituloDaPagina>
      <div className="container_cart_carrinho">
        {itensAdicionados.length === 0
          ? carrinhoVazio()
          : itensAdicionados.map((item, index) => (
              <div className="card_carrinho" key={index}>
                <div className="container_img_carrinho">
                  <img src={item.imagem} alt={item.titulo} />
                </div>
                <div className="container_descricao_carrinho">
                  <div className="box_titulo_descricao">
                    <div className="box_titulo_btnDelete">
                      <h3 className="titulo_carrinho">
                        {item.titulo.substring(0, 60)}
                      </h3>
                      <div onClick={() => handleRemove(item.id)}>
                        <MdDeleteOutline className="btnDelete" />
                      </div>
                    </div>
                    <p>{item.descricao}</p>
                  </div>
                  <div className="box_preco_btn">
                    <div>
                      <span className="preco_carrinho">
                        {formataDinheiro(item.preco)}
                      </span>
                    </div>
                    <div className="btn_carrinho">
                      <button
                        className="btn_add_remove"
                        onClick={() => decrementa(item)}
                      >
                        <MdRemove className="btnRemove" />
                      </button>
                      <input type="text" readOnly value={item.quantidade} />
                      <button
                        className="btn_add_remove"
                        onClick={() => incrementa(item)}
                      >
                        <MdAdd className="btnAdd" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
