import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import Routes from './routes';
// import { store } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter >
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
