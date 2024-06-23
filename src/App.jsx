import React from 'react';



const App = () => {

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [state,setState] = React.useState([])

  const verif = (cor) => {
    return state.includes(cor)
  }

  const handleChange = ({target}) => {
    if(target.checked){
      setState([...state,target.value])
    }else{
      setState(state.filter((cores) => cores != target.value))
    }
  }

  return (
   <div>
      {coresArray.map((cor) => {
        return(<label key={cor}>
          <input type="checkbox" onChange={handleChange} checked={verif(cor)} value={cor}/>{cor}
        </label>)
      })}
      {state}
   </div>
  );
};




export default App;
