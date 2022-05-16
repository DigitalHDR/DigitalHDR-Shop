//src/routes
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import ProdutoDetalheBanner from './pages/ProdutoDetalheBanner'; 
import Lojas from './pages/Lojas';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';

export default function Rotas() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/lojas" element={<Lojas />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtoDetalhe/:idProtudo" element={<ProdutoDetalhe />} />
      <Route path="/produtoDetalheBanner/:idProdutoBanner" element={<ProdutoDetalheBanner />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  )
}

