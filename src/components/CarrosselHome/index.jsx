import React, { useRef } from 'react'
import './styles.css'
import TituloDaPagina from '../../components/TitiloDaPagina'
import apiDados from '../../data/apiDados'
import { ImCircleLeft } from 'react-icons/im'
import dinheiroFormatado from '../../functions/dinheiroFormatado'
import Stars from '../Stars'

export default function CarrosselHome() {
  const carrosel = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth
  }

  function handleRigthClick(e) {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth
  }

  return (
    <div className="container_global">
      <TituloDaPagina>Home</TituloDaPagina>

      <div className="container_carrossel">
        <div className="carrossel_box">
          <div className="carrossel" ref={carrosel}>
            {apiDados.especificacao.map((item, index) => {
              const { titulo, imagem, preco } = item
              return (
                <div className="carrossel_item" key={index}>
                  <div className="carrossel_image">
                    <img src={imagem} alt={titulo} />
                  </div>
                  <div className="carrossel_info">
                    <p className="carrossel_titulo">
                      {titulo.substring(0, 30) + '...'}
                    </p>
                    <div className='carrossel_info_start'>
                    <Stars />
                    </div>
                    <p className="carrossel_preco">
                      {dinheiroFormatado(preco)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="carrossel_btn">
            <button onClick={handleLeftClick}>
              <ImCircleLeft className="carrossel_seta_left" />
            </button>
            <button onClick={handleRigthClick}>
              <ImCircleLeft className="carrossel_seta_rigth" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
