import React from 'react';
import { Link } from 'react-router-dom';
import { BsMoonStars } from 'react-icons/bs';
import './styles.css';
import Botao from '../Botao';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default function Header(props) {
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
            <MdOutlineShoppingCart className="btn_Cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
