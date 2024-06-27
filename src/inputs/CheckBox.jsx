import React from 'react'

const CheckBox = ({label,value,id,setValue,options}) => {


  function verif(option){
    return value[id].includes(option) ? true : false
  }

  function handleCheck({target}){
    if(target.checked){
      console.log(1)
      setValue({...value,[id]: [...value[id],target.value]})
    }
    else{
      setValue({...value,[id]: value[id].filter((option) => option != target.value)})

    }


  }

  return (
    <>
      {options.map((option,index) => {
      return(
      <label key={index}>{option}
        <input value={option} type='checkbox' id={id} checked={verif(option)} onChange={handleCheck}/>
      </label>)
    
    })}
    </>
  )
}

export default CheckBox
