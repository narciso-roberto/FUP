import React from 'react'

const Comp = ({nome,preco,fotos}) => {
  
  return (
    <div>
      <h1>{nome}</h1>
      <p>{preco ? 'R$'+preco : null}</p>
      <img src={fotos ? fotos[0].src : ''}/>
    </div>
  )
}

export default Comp
