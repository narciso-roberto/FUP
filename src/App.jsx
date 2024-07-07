import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Produtos from './Produtos';

const App = () => {


  return (<>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='' element={<Produtos/>}/>
        <Route path='produtos/:id'/>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;