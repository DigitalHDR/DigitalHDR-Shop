//src/components/banner
import React from 'react'
import './styles.css'
import BotaoDetalhes from '../BotaoDetalhes'
import { Link } from 'react-router-dom'
import api from '../../data/apiDados'

export default function Banner() {
  return (
    <div className="container_banner">
      {api.bannerHome.map(item => {
        return (
          <div className="banner" key={item.id}>
            <img src={item.imagem} alt="logo" />
            <div className="banner_info">
              <h2>Promoção da Semana</h2>
              <h4>Console PlayStation 5 Controle Dual Sense Branco Preto</h4>
              <p>{item.descricao}</p>
              <div className="banner_box_btn box_btn">
                <BotaoDetalhes btn={global}>
                  <Link to={`/produtoDetalheBanner/${item.id}`}>Detalhes</Link>
                </BotaoDetalhes>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
