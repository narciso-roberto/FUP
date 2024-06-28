import React from 'react';
// import Input from './inputs/Input';
// import Select from './inputs/Select';
import Radio from './inputs/Radio';
// import CheckBox from './inputs/CheckBox';
// import useForm from './Hooks/useForm';

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
  const [ask,setAsk] = React.useState(0)
  const [pontos,setPontos] = React.useState(0)
  const [escolha,setEscolha] = React.useState(null)
  if(perguntas[ask]){

  const {id,resposta,options,pergunta} = perguntas[ask]

  
  function handleSkip(even){
    even.preventDefault()
    
    if(escolha == resposta){
      setPontos(pontos + 1)
    }
    
    setAsk(ask+1)
    setEscolha(null)
  }

  function hanldeChange({target}){
    setEscolha(target.value)
  }
  

    return (
      <>
      <form>
        {pergunta}
        {options.map((op,i) => {
          return <>
          <label key={i}>
            <input type='radio' checked={op == escolha ? true : false} value={op} name={id} id={id} onChange={hanldeChange}/>
            {op}
          </label>
          </>
        })}
        <button onClick={handleSkip}></button>
      </form>
      
      </>
    );
  
  }else
    return(
      <p>Voce acertou {pontos} de 4</p>
    )
    
  
};





export default App;
