import React from 'react';
import { Link } from 'react-router-dom';
import { BsMoonStars } from 'react-icons/bs';
import './styles.css';
import Botao from '../Botao';

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
            <Botao global={global}>Home</Botao>
          </Link>
          <Link to="/produtos">
            <Botao global={global}>Produtos</Botao>
          </Link>
          <Link to="/lojas">
            <Botao global={global}>Lojas</Botao>
          </Link>
          <Link to="/sobre">
            <Botao global={global}>Sobre</Botao>
          </Link>
          <Link to="/login">
            <Botao>Login</Botao>
          </Link>
          <Link to="/logout">
            <Botao>Logout</Botao>
          </Link>
        </nav>
      </div>
    </header>
  );
}
