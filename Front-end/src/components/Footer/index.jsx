import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="container_global footer_menu">
        <div>
          <div>PlayStation 5</div>
          <div>PlayStation 4</div>
          <div>PlayStation 3</div>
        </div>
        <div>
          <div>Xbox Series X</div>
          <div>Xbox Series S</div>
          <div>Xbox Series Infinit</div>
        </div>
        <div>
          <div>Nintendo Switch</div>
          <div>Nintendo Switch jogos</div>
          <div>Switch Tela Oled</div>
        </div>
        <div>
          <div>Xbox Controle</div>
          <div>Xbox Series X Controle</div>
          <div>Xbox Series S Controle</div>
        </div>
      </div>

      <div className="copyright">DigitalHDR Copyright © 2022</div>
    </footer>
  );
}
