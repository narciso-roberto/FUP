import React from 'react'

const Input = ({value,setValue,nome,id,label,type,...props}) => {

    function handleChange({target}){
        setValue({...value,[id]: target.value})
    }

  return (
    <>
      <label id={id}>{label}
        <input value={value[id]} id={id} name={nome} type={type} onChange={handleChange} {...props} />
      </label>
    </>
  )
}

export default Input
