//src/pages/produtosdetalhes
import React from 'react'
import './styles.css'
import api from '../../data/apiDados'
import BotaoDetalhes from '../../components/BotaoDetalhes'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/modules/carrinho/actions'
import formataDinheiro from '../../functions/dinheiroFormatado'
import TituloDaPagina from '../../components/TitiloDaPagina'
import porcentagemRiscada from '../../functions/porcentagemRiscada'
import Stars from '../../components/Stars'

export default function ProdutoDetalhe(props) {
  function notify() {
    return null
  }

  const dispatch = useDispatch()

  const { idProtudo } = useParams()
  const protudo =
    api.especificacao.find(este => este.id === Number(idProtudo)) ||
    api.bannerHome.find(este => este.id === Number(idProtudo))

  function AddItemNoCarrinho(item) {
    dispatch(addItem(item))
  }

  return (
    <div className="container_global">
      <TituloDaPagina>{protudo.titulo}</TituloDaPagina>
      <div className="container_cart_id">
        <div className="card_id">
          <div className="container_img_id">
            <img src={protudo.imagem} alt={protudo.titulo} />
          </div>

          <div className="container_descricao_id">
            <p>{protudo.descricao}</p>
            <p>
              Vendido e entrege por{' '}
              <strong className="nomeDeMarcas">DigitalHDR</strong>
            </p>
            <div className="box_star_preco">
              <Stars />
              <span className="dinheiro_riscado">
                {formataDinheiro(porcentagemRiscada(protudo.preco, 107))}
              </span>
              <span className="preco_id">{formataDinheiro(protudo.preco)}</span>
              <p>
                Á Vista no <strong className="nomeDeMarcas">Pix</strong> com
                descontos de até 10%
              </p>
            </div>

            <div className="btn_id">
              <div onClick={() => AddItemNoCarrinho(protudo)}>
                <BotaoDetalhes addItem={notify}>
                  Adicionar no carrinho
                </BotaoDetalhes>
              </div>
              <BotaoDetalhes>
                <div>Comprar</div>
              </BotaoDetalhes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
