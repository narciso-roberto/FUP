import React from "react";

export const dadosGlobais = React.createContext()

export const ArmazenGlobais = ({ children }) => {
    const [dados, setDados] = React.useState(null)

    async function pull(){
        const dados = await (await fetch("https://ranekapi.origamid.dev/json/api/produto/")).json()
        setDados(dados)
    }

    React.useEffect(() => {
        pull()
    },[])

    const limparDados = () => {
        setDados(null)
    }

    return (<>
        <dadosGlobais.Provider value={{dados,limparDados}} >
            {children}
        </dadosGlobais.Provider>
    </>)
}