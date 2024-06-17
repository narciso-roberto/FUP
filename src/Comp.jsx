import React, { useEffect, useState } from 'react'

const Comp = ({produto}) => {

    const [alvo,setAlvo] = useState(null)
  
    useEffect(() => {
      if(produto != null){
        async function pull(){
          const dadosJson = await (await fetch('https://ranekapi.origamid.dev/json/api/produto/'+produto)).json()
          setAlvo(dadosJson)
        }
        pull()
      }
        
    },[produto])

    if(alvo!= null){
      return (
        <div>
          <h1>{alvo.nome}</h1>
          <p>{alvo.preco}</p>
        </div>
      )
    }
}

export default Comp
