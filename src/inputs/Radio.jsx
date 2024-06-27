import React from 'react'

const Radio = ({label,value,id,setValue,options}) => {


  return (<>
    {options.map((option,index) => {
      return(
      <label key={index}>{option}
        <input value={option} type='radio' name={id} onChange={({target}) => {setValue({...value,[id]: target.value})}}/>
      </label>)
    
    })}
  </>)
}

export default Radio
