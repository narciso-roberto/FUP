import React from 'react';
import useFetch from './useFetch';

const App = () => {

  const {data,request,load,erro} = useFetch()


  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto')
  },[request])

  if(erro) return <div>{erro}</div>
  if(load) return <div>carregando</div>
  if(data)
    return (
      <ul>
        {data.map((prod) => {
          return <li key={prod.id}>{prod.nome}</li>
        })}
      </ul>
    );
  
};

export default App;

