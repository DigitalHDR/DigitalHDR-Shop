import React from 'react';
import api from '../../data/apiDados';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import Botao from '../../components/Botao';
import { useParams } from 'react-router-dom';

export default function ProdutoDetalhe() {
  const { idProtudo } = useParams();
  const protudo = api.especificacao.find((este) => este.id === Number(idProtudo))
  return (
    <div className="container_global">
      <div className="box_card">
          <li className="card_container">
            <img src={protudo.imagem} alt={protudo.titulo} />
            <strong>
              <h3>{protudo.titulo}</h3>
            </strong>
            <div className="descricao">
              <p>{protudo.descricao.substring(0, 80) + '...'}</p>
            </div>
            <div className="box_preco">
              <div>
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStarHalf className="star" />
                <MdStarBorder className="star" />
              </div>
              <span>R$ {protudo.preco}</span>
            </div>
            <div className="box_btn">
              <Botao btn={global}>Detalhes</Botao>
            </div>
          </li>
      </div>
    </div>
  );
}
