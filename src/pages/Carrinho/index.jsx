//scr/pages/carrinho
import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import TituloDaPagina from '../../components/TitiloDaPagina';
import ValorTotal from '../../components/ValorTotal';
import CartListProduto from '../../components/CartListProduto';

export default function Carrinho() {
  const itensAdicionados = useSelector((state) => state.carrinho);
  return (
    <div className="container_global">
      <TituloDaPagina>Lista de Ítens no Carrinho</TituloDaPagina>
      <CartListProduto />
      {itensAdicionados.length > 0 && <ValorTotal />}
    </div>
  );
}
