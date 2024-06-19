import React from 'react'

const useFetch = () => {
  const [data,setData] = React.useState(null)
  const [load,setLoad] = React.useState(null)
  const [erro,setErro] = React.useState(null)

  const request = React.useCallback(async (url) => {
        let dadosJson;
        try{
            setErro(null)
            setLoad(true)
        
            dadosJson = await (await fetch(url)).json()
            
        }catch(erro){
            setData(null)
            setErro('erro')
            
        }finally{
            setData(dadosJson)
            setLoad(false)
            // return{responde,json}
        }

  })

  return {data,load,erro,request}
}

export default useFetch
