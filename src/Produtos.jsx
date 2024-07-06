import React from 'react'
import { useParams, Routes, Route } from 'react-router-dom';
import ShowProdutos from './ShowProdutos';
import ProdutoEspec from './ProdutoEspec';

const Produtos = () => {

  return (
    <div>
    <Routes>
      <Route path="*" element={<ShowProdutos />} />
      <Route path="produto/:id" element={<ProdutoEspec/>}/>
    </Routes>
  </div>
  )
}

export default Produtos
