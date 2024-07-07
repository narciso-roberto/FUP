import React from 'react'
import style from './style/Produtos.module.css'
import Modal from './Modal'

const Produtos = () => {
    const [dados,setDados] = React.useState(null)
    const [modal,setModal] = React.useState({ativo:null,dados:null})

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto').then((response) => {
          return response.json()
        }).then((json) => {
          setDados(json)
        })
      },[])

    if(dados)
      return (
        <>
        <div className={style.containerProdutos}>
          {dados.map((produto,i) => {
            return(
              <div onClick={() => {setModal({ativo:true,dados:produto})}} className={style.produto} key={i}>
                <img src={produto.fotos[0].src}/>
                <div>
                  <h1>{produto.nome}</h1>
                </div>
              </div>
            )
          })}
        </div>
          <Modal isOpen={modal.ativo} setOpen={setModal} dados={modal.dados}/>
        </>
      )
}

export default Produtos
