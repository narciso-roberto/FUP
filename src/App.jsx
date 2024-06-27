import React from 'react';
import Input from './inputs/Input';
import Select from './inputs/Select';
import Radio from './inputs/Radio';
import CheckBox from './inputs/CheckBox';


const App = () => {
  
  const [dados,setDados] = React.useState({nome: '',email:'',senha:'',select:'',radio:'',cpf:'',checkbox:[]})


  return(<>
  <form>
    <Input value={dados} setValue={setDados} label='Nome' type='text' id='nome' name='nome'/>
    <Input value={dados} setValue={setDados} label='Senha' type='password' id='senha' name='senha'/>
    <Input value={dados} setValue={setDados} label='E-mail' type='email' id='email' name='email'/>
    <Select value={dados} setValue={setDados} label='Cores' id='select'>
        <option value={''}>Escolha algo</option>
        <option value={'vermelho'}>Vermelho</option>
        <option value={'azul'}>Azul</option>
        <option value={'amarelo'}>Amarelo</option>
    </Select>
    <Radio value={dados} setValue={setDados} label='Produtos' id='radio' options={['Nootebok','Smartphone','Apple']}/>
    <CheckBox value={dados} setValue={setDados} label='Frutas' id='checkbox' options={['manga','caju','laranja']}/>
  </form>

  </>)
};




export default App;
