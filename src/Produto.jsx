import React from 'react'
import { dadosGlobais } from './GlobalContext'

const Produto = () => {

    const dadosProduto = React.useContext(dadosGlobais)

    return (
        <ul>
            {dadosProduto.dados && dadosProduto.dados.map((produto,index) => {
                return <li key={index}>{produto.id}</li>
            })}
            <button onClick={() => dadosProduto.limparDados()}>Limpar</button>
        </ul>
        )
    
  
}

export default Produto
