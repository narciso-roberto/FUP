import React from 'react'

const Cabecalho = ({title}) => {

    React.useEffect(() => {
        document.title = `LoLja | ${title}`;
    },[title])
  

    return <></>
}

export default Cabecalho
