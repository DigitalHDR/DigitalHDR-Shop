import React, { useState } from 'react'
import './style.css'
import TituloDaPagina from '../../components/TituloDaPagina'
import BotaoLogin from '../../components/BotaoLogin'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { autentificaLogin } from '../../store/modules/autentificacao/actions'

export default function Login() {
  const dispatch = useDispatch()
  const navegacao = useNavigate()
  const [cadastrado, setCadastrado] = useState(false)

  const [inputs, setInputs] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  const handleChange = e => {
    setInputs(estadoAnterior => ({
      ...estadoAnterior,
      [e.target.name]: e.target.value,
    }))
  }

  const enviarPedido = async (type = 'login') => {
    const res = await axios
      .post(
        // `https://hdr-shop.herokuapp.com/api/TodosUsuarios/${type}` ||
          `http://localhost:5000/api/TodosUsuarios/${type}`,
        {
          nome: inputs.nome,
          email: inputs.email,
          senha: inputs.senha,
        }
      )
      .catch(err => console.log(err))
    const data = await res.data
    return data
  }

  function handleLogin(cadastrado) {
    dispatch(autentificaLogin(cadastrado))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!cadastrado) {
      enviarPedido('Cadastrar')
        .then(data => localStorage.setItem('tokenUsuario', data.token))
        .then(() => handleLogin(!cadastrado))
        .then(() => navegacao('/'))
    } else {
      enviarPedido()
        .then(data => localStorage.setItem('tokenUsuario', data.token))
        .then(() => handleLogin(cadastrado))
        .then(() => navegacao('/'))
    }
  }

  return (
    <div className="container_global">
      <div className="box_form">
        <TituloDaPagina>{cadastrado ? 'Login' : 'Cadastrar-se'}</TituloDaPagina>
        <form onSubmit={handleSubmit}>
          {!cadastrado && (
            <label>
              Nome
              <input
                type="text"
                name="nome"
                onChange={handleChange}
                value={inputs.nome}
              />
            </label>
          )}

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              name="senha"
              onChange={handleChange}
              value={inputs.senha}
            />
          </label>

          <div className="box_btn">
            <BotaoLogin btn={global}>
              {cadastrado ? 'Fazer Login' : 'Cadastrar'}
            </BotaoLogin>
          </div>

          <p
            className="loginOuCadastro"
            onClick={() => setCadastrado(!cadastrado)}
            style={{ color: '#fff', textAlign: 'center' }}
          >
            Clique aqui para {cadastrado ? 'se Cadastrar' : 'Fazer o Login'}
          </p>
        </form>
      </div>
    </div>
  )
}
