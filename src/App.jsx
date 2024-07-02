import React, { useState } from 'react';
import Radio from './inputs/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


const App = () => {
  const [slide,setSlide] = useState(0)
  const [select,setSelect] = useState({p1:'',p2:'',p3:'',p4:''})
  const [resultado,setResultado] = useState(null)

  function handleChange({target}){
    setSelect({...select, [target.id]: target.value})
  }

  function handleClick(){
    setSlide(slide+1)
  }

  function pontos(){
    const acertos = perguntas.filter((request) => request.resposta == select[request.id])
    setResultado("Voce acertou "+ acertos.length +" de "+ perguntas.length)
  }

  if(slide < perguntas.length)
  return (
    <form onSubmit={(even) => {even.preventDefault()}}>
      <>
      {perguntas.map((quest,index) => {
        return(<>
        <Radio handleChange={handleChange} ativo={slide == index} {...quest}/>
        </>)
      })}
      </>
      <button onClick={handleClick}>proxima</button>
    </form>
    );

  else
  return(<>
    {!resultado ? pontos() : resultado}
  </>)
  }

  export default App;