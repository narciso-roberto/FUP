import React from 'react';
import Input from './inputs/Input';
import Select from './inputs/Select';
import Radio from './inputs/Radio';
import CheckBox from './inputs/CheckBox';
import useForm from './Hooks/useForm';


const App = () => {
  const cep = useForm('cep');


  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000" 
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
};





export default App;
