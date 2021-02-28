import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import MyContext from './context';

function App() {
  const [addToCart, setAddToCart] = useState(0);

  return (
    <MyContext.Provider value={{addToCart, setAddToCart}}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </MyContext.Provider>
  );
}

export default App;
