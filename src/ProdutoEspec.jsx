import React from 'react'
import {useParams} from 'react-router-dom';
import './style/ProdutoEspec.css'
import Cabecalho from './Cabecalho';

const ProdutoEspec = () => {

    const params = useParams();
     // Utilize a API abaixo para puxar a lista de produto
    // https://ranekapi.origamid.dev/json/api/produto
    // Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
    // https://ranekapi.origamid.dev/json/api/produto/notebook

    const[dados,setDados] = React.useState(null)
    const[carregando,setCarregando] = React.useState(null)


    React.useEffect(() => {
      setCarregando(true)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
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
      <div className='cardEspec animeLeft'>
        <Cabecalho title={dados.nome}/>
        <div>
          {dados.fotos.map((url,i) => {
            return <React.Fragment key={i}>
              <img src={url.src}/>
            </React.Fragment>
          })}
        </div>
        <div>
            <h3>{dados.nome}</h3>
            <span>R$ {dados.preco}</span>
            <p>{dados.descricao}</p>
        </div>
      </div>
    )
}

export default ProdutoEspec
