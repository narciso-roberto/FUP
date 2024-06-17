import React, { useEffect, useState } from 'react';
import Comp from './Comp'


const App = () => {

  const [alvo,setAlvo] = useState(null)

  async function initFetch({target}){
    const produto = target.innerText.toLowerCase()
    const produtoJSON = await (await fetch("https://ranekapi.origamid.dev/json/api/produto/"+produto)).json()

    setAlvo(produtoJSON)
    localStorage.produto = produtoJSON.id
  }

  async function initPage(produto){
    const produtoJSON = await (await fetch("https://ranekapi.origamid.dev/json/api/produto/"+produto)).json()
    setAlvo(produtoJSON)
  }

  useEffect(() => {
    if(localStorage.produto){
      initPage(localStorage.produto)
    }
  },[])

  

  return(<>
  <h1>Preferencia: {alvo && alvo.nome}</h1>
  <button onClick={initFetch}>Notebook</button>
  <button onClick={initFetch}>Smartphone</button>
  
  <Comp {...alvo}/>
  </>)
};

export default App;

