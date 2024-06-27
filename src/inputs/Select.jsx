import React from 'react'

const Select = ({label,value,id,setValue,children,...props}) => {
  

  return (
    <>{label+':'}
    <select id={id} value={value[id]} {...props} onChange={({target}) => {setValue({...value,[id]: target.value})}}>
        {children.map((option,index) => {
          return <React.Fragment key={index}>{option}</React.Fragment>
        })}
    </select>
      
    </>
  )
}

export default Select
