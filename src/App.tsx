import { useState } from 'react'
import './App.css'

// componente React Vazio
const Componente = () => null;

// componente React
const Botao = (props : any) => {
  const titulo = props.titulo ? props.titulo : 'texto padrão'
  const [contador, contar] = useState(0);
  return (
    <>
    <button onClick={() => contar(contador+1)}>
    {`${titulo} (${contador})`}
    </button>
    </>);
}

//auto rename tag - baixar extensao

function App() {
  const [contador, setContador] = useState(5)


  return (
    <>
    <div><h1>Meu contador está em {contador}</h1></div>
      <div className="card">
        <Botao titulo="Incrementar"/>
        <Botao titulo={"Decrementar"}/>
        <Botao titulo={"Zerar"}/>
        <button onClick={() => setContador(contador+1)}>
          Estado geral
        </button>
        <Componente />   
      </div>
    </>
  )
}

export default App
