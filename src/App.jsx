import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NovoVideo from './Pages/NovoVideo';
import PaginaPadrao from './Componentes/PaginaPadrao';
import Home from './Pages/Home';
import { VideoCard } from './Componentes/VideoCard';


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Home />} />
              <Route path="/novovideo" element={<NovoVideo />} />
            </Route>

            {/* <Route path="/banner" element={<VideoCard videoId={9} /> }/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
