import React from 'react'
import './styles.css'

export default function Botao(props) {
  return (
    <button type="submit" className="login_btn">
      {props.children}
    </button>
  )
}
