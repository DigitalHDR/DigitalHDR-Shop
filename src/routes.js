import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Lojas from './pages/Lojas';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

export default function Rotas() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/produtos" element={<Produtos />} />
      <Route index path="/lojas" element={<Lojas />} />
      <Route index path="/sobre" element={<Sobre />} />
      <Route index path="/login" element={<Login />} />
    </Routes>
  );
}
