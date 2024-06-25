import React from 'react';
import Input from './inputs/Input';
import Select from './inputs/Select';


const App = () => {
  
  const [dados,setDados] = React.useState({nome: '',email:'',senha:'',select:''})

  console.log(dados.select)
  return(<>
  <form>
    <Input value={dados} setValue={setDados} label='Nome' type='text' id='nome' name='nome'/>
    <Input value={dados} setValue={setDados} label='Senha' type='password' id='senha' name='senha'/>
    <Input value={dados} setValue={setDados} label='E-mail' type='email' id='email' name='email'/>
    <Select value={dados} setValue={setDados} label='Cores' id='select'/>
    
  </form>
  
  </>)
};




export default App;
