import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Contato from './Contato';
import Produtos from './Produtos';


const App = () => {
  // Utilize a API abaixo para puxar a lista de produto
  // https://ranekapi.origamid.dev/json/api/produto
  // Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
  // https://ranekapi.origamid.dev/json/api/produto/notebook


  
  return (<>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='*' element={<Produtos/>}/>
        <Route path='contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;