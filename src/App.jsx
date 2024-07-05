import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NovoVideo from './Pages/NovoVideo';
import PaginaPadrao from './Componentes/PaginaPadrao';



function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<PaginaPadrao />}></Route>
            <Route path="/novovideo" element={<NovoVideo />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
