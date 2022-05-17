import React from 'react'
import api from '../../data/apiDados'
import './styles.css'
import BotaoDetalhes from '../../components/BotaoDetalhes'
import { Link } from 'react-router-dom'
import formataDinheiro from '../../functions/dinheiroFormatado'
import TituloDaPagina from '../../components/TituloDaPagina'
import Star from '../../components/Stars'

export default function Produtos() {
  return (
    <div className="container_global">
      <TituloDaPagina>Lista de Produtos</TituloDaPagina>
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
            <Star />
              <span>{formataDinheiro(item.preco)}</span>
            </div>
            <div className="box_btn">
              <BotaoDetalhes btn={global}>
                <Link to={`/produtoDetalhe/${item.id}`}>Detalhes</Link>
              </BotaoDetalhes>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}
