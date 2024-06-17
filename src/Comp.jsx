import React from 'react'

const Comp = ({nome,preco}) => {
  
  return (
    <div>
      <h1>{nome}</h1>
      <p>{preco && 'R$' + preco}</p>
    </div>
  )
}

export default Comp
