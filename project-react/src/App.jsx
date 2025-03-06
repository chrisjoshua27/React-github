import { useState } from "react"

import Perfil from "./componentes/Perfil"
import Formulario from "./componentes/Formulario"
import ReposList from "./componentes/ReposList"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState ('')

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      

      {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </> 
      )}
    
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App