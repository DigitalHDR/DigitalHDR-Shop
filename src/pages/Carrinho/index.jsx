//scr/pages/carrinho
import React from 'react';
import Botao from '../../components/Botao';
import './styles.css';
import { MdAdd, MdRemove, MdDeleteOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function Carrinho() {
  const itensAdicionados = useSelector((state) => state.carrinho);
  return (
    <div className="container_global">
      <div className="container_cart_carrinho">
        {itensAdicionados.map((item) => (
          <div className="card_carrinho">
            <div className="container_img_carrinho">
              <img src={item.imagem} alt={item.titulo} />
            </div>

            <div className="container_descricao_carrinho">
              <div className="box_titulo_descricao">
                <div className="box_titulo_btnDelete">
                  <h3 className="titulo_carrinho">{item.titulo}</h3>
                  <MdDeleteOutline className="btnDelete" />
                </div>
                <p>{item.descricao}</p>
              </div>

              <div className="box_preco_btn">
                <div>
                  <span className="preco_carrinho">{item.preco}</span>
                </div>

                <div className="btn_carrinho">
                  <Botao btn={global}>
                    <MdRemove className="btnRemove" />
                  </Botao>
                  <input type="text" readOnly value={item.quantidade} />
                  <Botao btn={global}>
                    <MdAdd className="btnAdd" />
                  </Botao>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
