import React from 'react'
import styles from './style/Modal.module.css'

const Modal = ({isOpen,setOpen,dados}) => {
  const modal = React.useRef();


    function click({target}){
      if(!modal.current.contains(target))
        setOpen(false)
    }

    console.log(dados)
    if(isOpen)
      return (
        <div className={styles.conatinerModal} onClick={click}>
          <div className={styles.produto} ref={modal} >
            <img src={dados.fotos[0].src}/>
            <div>
              <h1>{dados.nome}</h1>
              <span>R$ {dados.preco}</span>
              <p>{dados.descricao}</p>
            </div>
          </div>
        </div>
      )
  
}

export default Modal
