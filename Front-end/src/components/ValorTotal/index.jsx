import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import formataDinheiro from '../../functions/dinheiroFormatado';
import Botao from '../Botao';
import './style.css';

export default function ValorTotal() {
  const itensAdicionados = useSelector((state) => state.carrinho);
  const navigate = useNavigate();

  let total = 0;
  const somaTotalDeItens = (apenasUmparametro) => {
    total += apenasUmparametro.preco * apenasUmparametro.quantidade;
  };

  let quantidadeTotal = 0;
  const somaQuantidadeTotal = (e) => {
    quantidadeTotal += e.quantidade;
  };

  const handleFazerCompra = () => {
    console.log('Botão clicado - redirecionando para /compra');
    navigate('/compra');
  };

  return (
    <div className="container_cart_carrinho_valor">
      <div className="card_carrinho_valor">
        <div className="container_descricao_carrinho_valor">
          <div className="valor_e_texto_A">
            <div className="box_titulo_descricao_valor">
              <div className="box_titulo_btnDelete_valor">
                <h3 className="preco_carrinho_valor">Fazer a comprar</h3>
              </div>
            </div>

            <div>
              <span className="texto_valorTotal">
                {itensAdicionados.map(somaQuantidadeTotal)}
                Quantidade de {quantidadeTotal > 1 ? 'itens' : 'item'}
                {': '}
                <span className="totalCor">{quantidadeTotal}</span>
              </span>
            </div>

            <span className="texto_valorTotal">
              Total de {itensAdicionados.length > 1 ? 'itens' : 'item'}
              {': '}
              <span className="totalCor">{itensAdicionados.length}</span>
            </span>
          </div>

          <div className="valor_e_texto_B">
            <div className="box_titulo_btnDelete_valor">
              <h3 className="preco_carrinho_valor">Valor Total</h3>
            </div>

            <div className="preco_total">
              {itensAdicionados.map(somaTotalDeItens)}
              <span className="totalCor">
                {formataDinheiro(total.toFixed(2))}
              </span>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={handleFazerCompra}
            style={{
              padding: '10px 20px',
              backgroundColor: '#eeff00',
              color: '#000',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Fazer a compra
          </button>
        </div>
      </div>
    </div>
  );
}
