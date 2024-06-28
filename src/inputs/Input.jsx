import React from 'react'

const Input = ({value,id,label,onChange,type,onBlur,placeholder,error}) => {


  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} onChange={onChange} type={type} onBlur={onBlur} placeholder={placeholder} error={error} value={value} />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
