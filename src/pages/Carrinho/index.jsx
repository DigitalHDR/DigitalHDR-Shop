//scr/pages/carrinho
import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import carrinhoVazio from '../../functions/carrinhoVazio';
import TituloDaPagina from '../../components/TitiloDaPagina';
import ValorTotal from '../../components/ValorTotal';
import CartListProduto from '../../components/CartListProduto';

export default function Carrinho() {
  const itensAdicionados = useSelector((state) => state.carrinho);
  return (
    <div className="container_global">
      <TituloDaPagina>Lista de Ítens no Carrinho</TituloDaPagina>
      <div className="container_cart_carrinho">
        {itensAdicionados.length === 0
          ? carrinhoVazio()
          : itensAdicionados.map((item, index) => (
              <CartListProduto item={item} />
            ))}
      </div>
      {itensAdicionados.length > 0 && <ValorTotal />}
    </div>
  );
}
