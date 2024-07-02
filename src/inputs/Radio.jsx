import React, { useState } from 'react'

const Radio = ({handleChange,pergunta,options,resposta,id,ativo}) => {
  

  if(ativo)
  return (<>
      {pergunta}
      {options.map((op) => {
        return(<>
          <label>{op}<input type='radio' id={id} value={op} name={id} onChange={handleChange}></input></label>
        </>)
      })}
  </>)
}

export default Radio
