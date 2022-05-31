//scr/app
import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Rotas from './routes'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { autentificaLogin } from './store/modules/autentificacao/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('tokenUsuario')) {
      dispatch(autentificaLogin())
    }
  }, [dispatch])

  return (
      <BrowserRouter>
        <div>
          <div>
            <Header />
          </div>
          <div className="main">
            <Rotas />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
