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
const ListaItem = (props:any) => {
  return <li key={(props.indice)}>{props.titulo}</li>
}

const Lista = () => {
  const tarefas = [
    "Baixar o projeto do GitHub",
    "nstalar bibliotecas do projeto",
    "Executar aplicação Web",
    "Programar em Js e React",
    "Guardar as modificações no repositório",
    "Publicar as modificações no GitHub"

  ]
  return (
    <div className="card">
      <ul>
        {tarefas.map( (tarefa:string, index) => <ListaItem indice={index} titulo={tarefa}/>)}
      </ul>
      <ul>
        <ListaItem indice={0} titulo={tarefas[0]} />
        <ListaItem indice={1} titulo={tarefas[1]} />
        <ListaItem indice={2} titulo={tarefas[2]} />
        <ListaItem indice={3} titulo={tarefas[3]} />
        <ListaItem indice={4} titulo={tarefas[4]} />
        <ListaItem indice={5} titulo={tarefas[5]} />
      </ul>
    </div>
  );
}
//<li key={5}>{tarefas[5]}</li>

//auto rename tag - baixar extensao

const App = () => {
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
      <Lista/>
    </>
  )
}

export default App
