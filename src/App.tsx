import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = (props : any) => {
  const titulo = props.titulo ? props.titulo : 'texto padrão'
  return (
    <>
    <button>{titulo}</button>
    <br/>
    </>);
}

//auto rename tag - baixar extensao

function App() {
  const [contador, setContador] = useState(0)

  const handleOnClick = () => {
    setContador(contador+1);
  }

  return (
    <>
    <div><h1>{contador}</h1></div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button titulo='Meu primeiro botão'/>
        <Button titulo='Meu segundo botão'/>
        <Button/>
        <button onClick={handleOnClick}>
          count is {contador}
        </button>
      </div>
    </>
  )
}

export default App
