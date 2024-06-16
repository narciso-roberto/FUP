import React from 'react';
import Comp from './Comp';


const estilo ={
  listStyle: 'none',
  display: 'flex',
  gap: '20px'
}

const App = () => {
  const [dados,setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function initFetch({target}){
    let produtoLower = target.innerText.toLowerCase()

    setCarregando(true)
    const dadosObj = await (await fetch("https://ranekapi.origamid.dev/json/api/produto/"+produtoLower)).json()

    setDados(dadosObj)
    setCarregando(false)
  }

  return(
    <>
    <ul style={estilo}>
      <button onClick={initFetch}>Notebook</button>
      <button onClick={initFetch}>Smartphone</button>
      <button onClick={initFetch}>Tablet</button>
    </ul>   

    {carregando == true ? 'Carregando...' : <Comp {...dados}/>}

    </>
  )
};

export default App;

