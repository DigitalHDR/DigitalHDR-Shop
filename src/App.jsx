import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Rotas from './routes';
import Footer from './components/Footer';

function App() {
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
  );
}

export default App;
