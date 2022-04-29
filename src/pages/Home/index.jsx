import React from 'react';
import api from '../../data/apiDados';
import './styles.css';
import Botao from '../../components/Botao';

export default function Home() {
  return (
    <div className="container_global">
      <div className="box_card">
        {api.especificacao.map((item, index) => (
          <li className="card_container" key={index}>
            <img src={item.imagem} alt={item.titulo} />

            <strong>{item.titulo}</strong>

            <div className="descricao">
              <p>{item.descricao.substring(0, 80) + '...'}</p>
            </div>

            <div className="box_btn">
              <Botao btn={global}>Mais</Botao>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
