import React from 'react';
import './styles.css';
import api from '../../data/apiDados';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import Botao from '../../components/Botao';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/modules/carrinho/actions';

export default function ProdutoDetalhe(props) {
  const dispatch = useDispatch();

  const { idProtudo } = useParams();
  const protudo = api.especificacao.find(
    (este) => este.id === Number(idProtudo)
  )

  function AddItemNoCarrinho(item) {
    dispatch(addItem(item))
  }

  return (
    <div className="container_global">
      <div className="container_cart_id">
        <div className="card_id">
          <div className="container_img_id">
            <img src={protudo.imagem} alt={protudo.titulo} />
          </div>

          <div className="container_descricao_id">
            <h3 className="titulo_id">{protudo.titulo}</h3>
            <p>{protudo.descricao}</p>

            <div className="box_star_preco">
              <div className="star_id">
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStarHalf className="star" />
                <MdStarBorder className="star" />
              </div>

              <span className="preco_id">R${protudo.preco}</span>
            </div>

            <div className="btn_id">
              <Botao btn={global} >
                <div onClick={() => AddItemNoCarrinho(protudo)}>
                  Adicionar no carrinho
                </div>
              </Botao>

              <Botao btn={global}>
                <div>Comprar</div>
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
