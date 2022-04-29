import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
