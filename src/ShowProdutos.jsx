import React from 'react'
import './style/ShowProdutos.css'
import { Link } from 'react-router-dom';
import Cabecalho from './Cabecalho';


const ShowProdutos = () => {
  const[dados,setDados] = React.useState(null)
  const[carregando,setCarregando] = React.useState(null)


  React.useEffect(() => {
      setCarregando(true)
      fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => {
          return response.json()
      })
      .then((json) => {
          setCarregando(false)
          setDados(json)
      })
  },[])

  if(carregando)
    return(
        <div className='centro'>
          <div className="c-loader"></div>
        </div>	
        )
  if(dados)
    return (
      <div className='container-Produtos animeLeft'>
        <Cabecalho title=""/>
        {dados.map((dado,i) => {
          return (
                <Link to={`produto/${dado.id}`} key={i}>
              <div className='card'>
                <img src={dado.fotos[0].src}/>
                <h3>{dado.nome}</h3>
              </div>
                </Link>
          )
        })}
        
      </div>
    )
}

export default ShowProdutos
