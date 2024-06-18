import React from 'react';
import Comp from './Comp'


const App = () => {
  const [comentario,setComentario] = React.useState(['teste1','teste2'])
  const [input,setInput] = React.useState('')
  const campo = React.useRef()

  function click(){
    setComentario([...comentario, campo.current.value])
    setInput('')
    campo.current.focus()
  }

  return (<div>
    <ul>
      {comentario.map((text) => {
        return <li key={text}>{text}</li>
      })}
    </ul>
    <input
        type="text"
        value={input}
        ref={campo}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={click}>Enviar</button>
    </div>
  );
};

export default App;

