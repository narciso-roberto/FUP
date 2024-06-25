import React from 'react'

const Select = ({label,value,id,setValue,...props}) => {


  return (
    <>
    <select id={id} value={value[id]} {...props} onChange={({target}) => {setValue({...value,[id]: target.value})}}>
        <option value={''}>Escolha algo</option>
        <option value={'vermelho'}>Vermelho</option>
        <option value={'azul'}>Azul</option>
        <option value={'amarelo'}>Amarelo</option>
    </select>
      
    </>
  )
}

export default Select
