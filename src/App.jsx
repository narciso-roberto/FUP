import React from 'react';
import useLocalStorage from './Produto';


const App = () => {

  const [produtoPref,setProdutoPref] = useLocalStorage('prodPref','novo')

  
  function click(event){
    setProdutoPref(event.target.innerText)
  }

  return (
    <div>
      <p>Preferido: {produtoPref}</p>
      <button onClick={click}>notebook</button>
      <button onClick={click}>smartphone</button>
    </div>
  );
};

export default App;

