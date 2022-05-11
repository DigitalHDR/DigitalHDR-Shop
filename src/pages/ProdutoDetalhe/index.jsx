//src/pages/produtosdetalhes
import React from 'react';
import './styles.css';
import api from '../../data/apiDados';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import Botao from '../../components/Botao';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/modules/carrinho/actions';
import formataDinheiro from '../../functions/dinheiroFormatado';
import TituloDaPagina from '../../components/TitiloDaPagina';
import porcentagemRiscada from '../../functions/porcentagemRiscada';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function ProdutoDetalhe(props) {
  // const notify = () =>
  //   toast.success('Adicionado com sucesso!', {
  //     position: 'top-right',
  //     autoClose: 1000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: false,
  //     progress: undefined,
  //   });

  const dispatch = useDispatch();

  const { idProtudo } = useParams();
  const protudo = api.especificacao.find(
    (este) => este.id === Number(idProtudo)
  );

  function AddItemNoCarrinho(item) {
    dispatch(addItem(item));
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
            {/* <h3 className="titulo_id">{protudo.titulo}</h3> */}
            <p>{protudo.descricao}</p>
            <p>
              Vendido e entrege por{' '}
              <strong className="nomeDeMarcas">DigitalHDR</strong>
            </p>
            <div className="box_star_preco">
              <div className="star_id">
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStarHalf className="star" />
                <MdStarBorder className="star" />
              </div>
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
                <Botao btn={global} addItem={addItem}>
                  Adicionar no carrinho
                  {/* <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                  /> */}
                </Botao>
              </div>

              <Botao btn={global}>
                <div>Comprar</div>
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
