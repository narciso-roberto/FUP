import React from 'react';
import Comp from './Comp';


const estilo ={
  listStyle: 'none',
  display: 'flex',
  gap: '20px'
}

const App = () => {
  const [dados,setDados] = React.useState({})

  async function initFetch(link){
    setDados({nome: "CARREGANDO..."})
    const dadosObj = await (await fetch(link)).json()

    setDados(dadosObj)
  }

  return(
    <>
    <ul style={estilo}>
      <button onClick={() => {initFetch("https://ranekapi.origamid.dev/json/api/produto/notebook")}}>Notebook</button>
      <button onClick={() => {initFetch("https://ranekapi.origamid.dev/json/api/produto/smartphone")}}>Smartphone</button>
      <button onClick={() => {initFetch("https://ranekapi.origamid.dev/json/api/produto/tablet")}}>Tablet</button>
    </ul>   

    <Comp {...dados}/>

    </>
  )
};

export default App;

