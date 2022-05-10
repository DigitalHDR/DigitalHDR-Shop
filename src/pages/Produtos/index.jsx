import React from 'react';
import api from '../../data/apiDados';
import './styles.css';
import Botao from '../../components/Botao';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import { Link } from "react-router-dom";
import formataDinheiro from '../../functions';

export default function Produtos() {
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
              <span>{formataDinheiro(item.preco)}</span>
            </div>

            <div className="box_btn">
              <Botao btn={global}>
                <Link to={`/produtoDetalhe/${item.id}`}>Detalhes</Link>
              </Botao>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
