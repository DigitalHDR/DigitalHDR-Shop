import React, { useState } from 'react'
import './style.css'
import TituloDaPagina from '../../components/TituloDaPagina'
import BotaoDetalhes from '../../components/BotaoDetalhes'

export default function Login() {
  const [cadastrado, setCadastrado] = useState(false)

  return (
    <div className="container_global">
      <div className="box_form">
        <TituloDaPagina>{!cadastrado ? 'Login' : 'Cadastrar-se'}</TituloDaPagina>
        <form>
          <label>
            Nome
            <input type="text" />
          </label>

          <label>
            Email
            <input type="email" name="" id="" />
          </label>

          {cadastrado && (
            <label>
              Senha
              <input type="password" name="" id="" />
            </label>
          )}

          <div className="box_btn">
            <BotaoDetalhes>
              {!cadastrado ? 'Fazer Login' : 'Cadastrar'}
            </BotaoDetalhes>
          </div>

          <p className='loginOuCadastro'
            onClick={() => setCadastrado(!cadastrado)}
            style={{ color: '#fff', textAlign: 'center' }}
          >
            Clique aqui para {!cadastrado ? 'se Cadastrar' : 'Fazer o Login'}
          </p>
        </form>
      </div>
    </div>
  )
}
