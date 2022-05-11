import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

export default function Botao(props) {
  const notify = () =>
    toast.success('Adicionado com sucesso!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  return (
    <div
      id="btnModificado"
      onClick={props.addItem ? notify : null}
      type="submit"
      className={
        props.btn
          ? 'global_btn  global_btn_backgroud'
          : 'login_logout global_btn_login_logout'
      }
    >
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
    </div>
  );
}
