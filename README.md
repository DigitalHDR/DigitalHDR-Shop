# DigitalHDR Shop

Uma aplicação de e-commerce desenvolvida com React (frontend) e Node.js/Express (backend).

## 🚀 Tecnologias Utilizadas

### Frontend
- React
- Redux
- React Router
- Axios
- jwt-decode

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs

## 📁 Estrutura do Projeto

```
DigitalHDR-Shop/
├── Front-end/          # Aplicação React
├── Back-end/           # API Node.js/Express
└── README.md
```

## 🔐 Autenticação e JWT

### O que é JWT?
JWT (JSON Web Token) é um padrão para criar tokens de acesso que permitem a autenticação entre aplicações.

### jwtDecode - Decodificação de Tokens

O `jwtDecode` é uma função que **decodifica tokens JWT** para extrair as informações contidas neles.

#### Estrutura de um JWT:
Um JWT possui 3 partes:
1. **Header** (metadados)
2. **Payload** (dados do usuário) 
3. **Assinatura** (verificação de autenticidade)

#### Como funciona no projeto:

**Backend - Geração do Token:**
```javascript
const token = jwt.sign({
  id: usuario._id,
  nome: usuario.nome,  // ← Nome do usuário
  email: usuario.email
}, secret);
```

**Frontend - Decodificação:**
```javascript
import { jwtDecode } from 'jwt-decode';

const token = localStorage.getItem('tokenUsuario');
const decoded = jwtDecode(token);
const nomeUsuario = decoded.nome; // ← "Lucas"
```

#### Exemplo de uso:
```javascript
// Token JWT (exemplo)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Iiwibm9tZSI6Ikx1Y2FzIiwiZW1haWwiOiJsdWNhc0BleGFtcGxlLmNvbSIsImlhdCI6MTYzNzI5NjAwMCwiZXhwIjoxNjM3MzgwMDAwfQ.signature";

// Decodifica o token
const decoded = jwtDecode(token);
console.log(decoded);
// Resultado:
// {
//   id: "12345",
//   nome: "Lucas", 
//   email: "lucas@example.com",
//   iat: 1637296000,
//   exp: 1637380000
// }
```

#### Características do jwtDecode:
- **Decodifica** tokens JWT para extrair informações
- **Permite acessar** dados como nome, email, ID do usuário
- **Não verifica** se o token é válido (apenas decodifica)
- **É seguro** porque só lê dados que já estão no frontend

## 🛠️ Como Executar

### Backend
```bash
cd Back-end
npm install
npm run dev
```

### Frontend
```bash
cd Front-end
npm install
npm start
```

## 📝 Funcionalidades

- [x] Autenticação de usuários
- [x] Cadastro e login
- [x] Exibição do nome do usuário logado
- [x] Carrinho de compras
- [x] Listagem de produtos
- [x] Detalhes dos produtos

## 👨‍💻 Autor

Lucas Fernando
