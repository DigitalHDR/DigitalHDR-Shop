import React from 'react';
import { useSelector } from 'react-redux';
import formataDinheiro from '../../functions/dinheiroFormatado';

export default function ValorTotal() {
  const itensAdicionados = useSelector((state) => state.carrinho)
  
  let total = 0;
  const somaTotalDeItens = (apenasUmparametro) => {
    total += apenasUmparametro.preco * apenasUmparametro.quantidade;
  }
  
  let quantidadeTotal = 0;
  const somaQuantidadeTotal = (e) => {
    quantidadeTotal += e.quantidade;
  }

  return (
    <div className="container_cart_carrinho">
      <div className="card_carrinho">
        <div className="container_descricao_carrinho">
          <div className="box_titulo_descricao">
            <div className="box_titulo_btnDelete">
              <h3 className="preco_carrinho">Fazer a comprar</h3>
              <h3 className="preco_carrinho">Valor Total</h3>
            </div>
          </div>
          <div className="preco_total">
            <span className="texto_valorTotal">
              Total de {itensAdicionados.length > 1 ? 'itens' : 'item'}
              {': '}
              <span className="totalCor">{itensAdicionados.length}</span>
            </span>
            {itensAdicionados.map(somaTotalDeItens)}
            <span className="totalCor">
              {formataDinheiro(total.toFixed(2))}
            </span>
          </div>
          <div>
            <span className="texto_valorTotal">
              {itensAdicionados.map(somaQuantidadeTotal)}
              Quantidade de {quantidadeTotal > 1 ? 'itens' : 'item'}
              {': '}
              <span className="totalCor">{quantidadeTotal}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
