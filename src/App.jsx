//scr/app
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Rotas from './routes';
import Footer from './components/Footer';

import store from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
