import React from 'react';
import './styles.css';
import { GiShoppingCart } from 'react-icons/gi';

export default function carrinhoVazio() {
  return (
    <div className='container_carrinho_vazio'>
      <h3 className="carrinhoVazio">Carrinho está vazio...!</h3>
      <GiShoppingCart className='icone_carrinho_vazio' />
    </div>
  );
}
