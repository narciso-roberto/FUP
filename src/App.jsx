import React, { useState } from 'react';


const App = () => {
const [dados,setDados] = useState(null)
const [form, setForm] = useState(
  {nome:'',email:'',senha:'',
  CEP:'',rua:'',numero:'',
  bairro:'',cidade:'',estado:''})


  async function handleSubmit(event){
    event.preventDefault()
    setDados('carregando')
    try{
      await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setDados('dados enviados')
    }
    catch{
      setDados('Houve um erro *_*')
    }
  }

  function handleChange({target}){
    const {id,value} = target
    setForm({...form, [id] : value})
  }

  return(<>
  <form onSubmit={handleSubmit}>
    <label htmlFor='nome'>Nome</label>
    <input onChange={handleChange} name='nome' id='nome' type='text' value={form.nome}/>

    <label htmlFor='email'>E-mail</label>
    <input onChange={handleChange} name='email' id='email' type='email' value={form.email}/>

    <label htmlFor='senha'>Senha</label>
    <input onChange={handleChange} name='senha' id='senha' type='password' value={form.senha}/>

    <label htmlFor='CEP'>CEP</label>
    <input onChange={handleChange} name='CEP' id='CEP' type='text' value={form.CEP}/>

    <label htmlFor='rua'>Rua</label>
    <input onChange={handleChange} name='rua' id='rua' type='text' value={form.rua}/>

    <label htmlFor='numero'>Numero</label>
    <input onChange={handleChange} name='numero' id='numero' type='text' value={form.numero}/>

    <label htmlFor='bairro'>Bairro</label>
    <input onChange={handleChange} name='bairro' id='bairro' type='text' value={form.bairro}/>

    <label htmlFor='cidade'>Cidade</label>
    <input onChange={handleChange} name='cidade' id='cidade' type='text' value={form.cidade}/>

    <label htmlFor='estado'>Estado</label>
    <input onChange={handleChange} name='estado' id='estado' type='text' value={form.estado}/>

    <button>Enviar</button>
    <div>{dados != null ? dados: ''}</div>

  </form>
  </>)
};



export default App;
