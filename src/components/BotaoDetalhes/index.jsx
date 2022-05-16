import React from 'react'
import './styles.css'

import { ToastContainer, toast } from 'react-toastify'

export default function BotaoDetalhes(props) {
  const notify = () =>
    toast.success('Adicionado com sucesso!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined
    })

  return (
    <button
      onClick={props.addItem ? notify : null}
      type="submit"
      className='btn_detalhes'>
      {props.children}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </button>
  )
}
