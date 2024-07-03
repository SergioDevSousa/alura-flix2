import React from 'react';
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from './Componentes/Rodape';
import Banner from './Componentes/Banner';
import GlobalStyle from './GlobalStyle';



function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Cabecalho />
        <Banner />
        <Rodape />
      </div>
    </>

  );
}

export default App;
