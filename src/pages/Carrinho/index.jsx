import React from 'react';
import Botao from '../../components/Botao';
import './styles.css';
import { MdAdd, MdRemove, MdDeleteOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function Carrinho() {
  const itensAdicionados = useSelector((state) => state.carrinho)

  console.log('mues itens', itensAdicionados)

  return (
    <div className="container_global">
      <div className="container_cart_carrinho">
        <div className="card_carrinho">
          <div className="container_img_carrinho">
            <img src="https://i.postimg.cc/3JM0KMv3/14.png" alt="s" />
          </div>

          <div className="container_descricao_carrinho">
            <div className="box_titulo_descricao">
              <div className="box_titulo_btnDelete">
                <h3 className="titulo_carrinho">titulo do produto</h3>
                <MdDeleteOutline className="btnDelete" />
              </div>
              <p>
                descrição descrição descrição descrição descrição descrição{' '}
                descrição descrição descrição descrição descrição descrição{' '}
                descrição descrição descrição descrição descrição descrição{' '}
              </p>
            </div>

            <div className="box_preco_btn">
              <div>
                <span className="preco_carrinho">R$11.11</span>
              </div>

              <div className="btn_carrinho">
                <Botao btn={global}>
                  <MdRemove className="btnRemove" />
                </Botao>
                <input type="text" readOnly value={12345} />
                <Botao btn={global}>
                  <MdAdd className="btnAdd" />
                </Botao>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
