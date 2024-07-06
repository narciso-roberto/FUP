import React from 'react'
import './style/Contato.css'
import Cabecalho from './Cabecalho'

const Contato = () => {
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
            <div className='container animeLeft'>
              <Cabecalho title="Contato"/>
              <img src={dados[0].fotos[0].src}/>
              <div>
                <h1>Entre em contato.</h1>
                <ul className='lista'>
                    <li>andre@origamid</li>
                    <li>99999-9999</li>
                    <li>Rua Ali Perto, 999</li>
                </ul>
              </div>
            </div>
          )
}

export default Contato
