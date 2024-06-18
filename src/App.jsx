import React, { useRef } from 'react';
import Comp from './Comp'


const App = () => {
  const [compra, setCompra] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  let intervalo = useRef()

  function click(){
    setCompra(compra+1)

    clearInterval(intervalo.current)

    setNotificacao('Obrigado pela compra')

    intervalo.current = setInterval(() => {setNotificacao('')},2000)

    
    
  }

  return(
    <div>
      <button onClick={click}>Adicionar Carrinho</button>
      <p>{notificacao}</p>
    </div>
  )
};

export default App;

