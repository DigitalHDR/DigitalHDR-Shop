import React from 'react';
import { Link } from 'react-router-dom';
import { BsMoonStars } from 'react-icons/bs';
import './styles.css';
import Botao from '../Botao';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function Header(props) {
  const itemQuantidade = useSelector((state) => state.carrinho);

  return (
    <header className="header_container">
      <div className="container_global header_menu">
        <h1>
          <Link to="/">DigitalHDR</Link>
        </h1>
        <nav>
          <BsMoonStars className="icon_style" />
          <Link to="/">
            <Botao btn={global}>Home</Botao>
          </Link>
          <Link to="/produtos">
            <Botao btn={global}>Produtos</Botao>
          </Link>
          <Link to="/lojas">
            <Botao btn={global}>Lojas</Botao>
          </Link>
          <Link to="/sobre">
            <Botao btn={global}>Sobre</Botao>
          </Link>
          <Link to="/login">
            <Botao>Login</Botao>
          </Link>
          <Link to="/logout">
            <Botao>Logout</Botao>
          </Link>
          <Link to="/carrinho">
            <div className='box_carrinho_quantidade_item'>
              <span className="quantidadeDeItem">{itemQuantidade.length}</span>
              <MdOutlineShoppingCart className="btn_Cart" />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
