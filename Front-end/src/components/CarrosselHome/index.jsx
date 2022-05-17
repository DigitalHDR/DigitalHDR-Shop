import React, { useRef } from 'react'
import './styles.css'
import apiDados from '../../data/apiDados'
import { ImCircleLeft } from 'react-icons/im'
import dinheiroFormatado from '../../functions/dinheiroFormatado'
import Stars from '../Stars'
import { Link } from 'react-router-dom'

export default function CarrosselHome() {
  const carrosel = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth / 1.5
  }

  function handleRigthClick(e) {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth / 1.5
  }

  return (
    <div>
      <div className="container_carrossel">
        <div className="carrossel_box">
          <div className="carrossel" ref={carrosel}>
            {apiDados.especificacao.map((item, index) => {
              const { id, titulo, imagem, preco } = item
              return (
                <Link to={`/produtoDetalhe/${id}`} key={index}>
                  <div className="carrossel_item" key={index}>
                    <div className="carrossel_image">
                      <img src={imagem} alt={titulo} />
                    </div>
                    <div className="carrossel_info">
                      <p className="carrossel_titulo ">
                        {titulo.substring(0, 60) + '...'}
                      </p>
                      <div className="carrossel_info_start">
                        <Stars />
                      </div>
                      <p className="carrossel_preco">
                        {dinheiroFormatado(preco)}
                      </p>
                    </div>
                  </div>
                </Link>
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
