import React from 'react'
import api from '../../data/apiDados';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import Botao from '../../components/Botao';

export default function ProdutosDetalhes() {
  return (
    <div className="container_global">
      <div className="box_card">
        {api.especificacao.map((item, index) => (
          <li className="card_container" key={index}>
            <img src={item.imagem} alt={item.titulo} />

            <strong>
              <h3>{item.titulo}</h3>
            </strong>

            <div className="descricao">
              <p>{item.descricao.substring(0, 80) + '...'}</p>
            </div>

            <div className="box_preco">
              <div>
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStarHalf className="star" />
                <MdStarBorder className="star" />
              </div>
              <span>R$ {item.preco}</span>
            </div>

            <div className="box_btn">
              <Botao btn={global}>Detalhes</Botao>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
