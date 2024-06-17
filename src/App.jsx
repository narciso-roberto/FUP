import React, { useEffect, useState } from 'react';
import Comp from './Comp'


const App = () => {

  const [alvo,setAlvo] = useState(null)

  React.useEffect(() => {
    if(localStorage.produto){
      setAlvo(localStorage.produto)
    }
  },[])

  React.useEffect(() => {
    if(alvo)
      localStorage.produto = alvo
  },[alvo])

  function click({target}){
    setAlvo(target.innerText.toLowerCase())
  }


  return(<>
  <h1>Preferencia: {alvo}</h1>
  <button onClick={click}>Notebook</button>
  <button onClick={click}>Smartphone</button>
  
  <Comp produto={alvo}/>
  {/* se voce colocar um ternario aki nao seria melhor ? */}
  </>)
};

export default App;

