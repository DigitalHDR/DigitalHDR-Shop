//src/pages/produtodetalhebanner
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from '../../store/modules/carrinho/actions'
import apiDados from '../../data/apiDados'
import formataDinheiro from '../../functions/dinheiroFormatado'
import porcentagemRiscada from '../../functions/porcentagemRiscada'
import Stars from '../../components/Stars'
import TituloDaPagina from '../../components/TitiloDaPagina'
import BotaoDetalhes from '../../components/BotaoDetalhes'


export default function ProdutoDetalheBanner(props) {
  const dispatch = useDispatch()
  const { idProdutoBanner } = useParams()
  const produto = apiDados.bannerHome.find((este) => este.id === Number(idProdutoBanner))
  console.log(produto);

  function AddItemNoCarrinho(item) {
    dispatch(addItem(item))
  }

  function notify() {
    return null
  }

  return (
    <div className="container_global">
      <TituloDaPagina>{produto.titulo}</TituloDaPagina>
      <div className="container_cart_id">
        <div className="card_id">
          <div className="container_img_id">
            <img src={produto.imagem} alt={produto.titulo} />
          </div>

          <div className="container_descricao_id">
            <p>{produto.descricao}</p>
            <p>
              Vendido e entrege por{' '}
              <strong className="nomeDeMarcas">DigitalHDR</strong>
            </p>
            <div className="box_star_preco">
              <Stars />
              <span className="dinheiro_riscado">
                {formataDinheiro(porcentagemRiscada(produto.preco, 107))}
              </span>
              <span className="preco_id">{formataDinheiro(produto.preco)}</span>
              <p>
                Á Vista no <strong className="nomeDeMarcas">Pix</strong> com
                descontos de até 10%
              </p>
            </div>

            <div className="btn_id">
              <div onClick={() => AddItemNoCarrinho(produto)}>
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
