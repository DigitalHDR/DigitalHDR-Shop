import React from 'react';

export default function Botao(props) {
  return (
    <button
      type="submit"
      className={
        props.btn
          ? 'global_btn  global_btn_backgroud'
          : 'login_logout global_btn_login_logout'
      }
    >
      {props.children}
    </button>
  );
}
