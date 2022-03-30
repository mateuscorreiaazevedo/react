import "./App.css"
import HelloWorld from "./components/Aula01/HelloWorld"
import Frase from "./components/Aula01/Frase"
import Props from "./components/Aula02/Props"

function App() {
  const image = "https://via.placeholder.com/250"
  return (
    <div className="App">
      <div>
        <h1>Aula 01</h1>
        <HelloWorld />
        <img src={image} alt="Imagem Qualquer" />
        <Frase name="Marcos" />
      </div>
      <div>
        <h1>Aula 02</h1>
        <Props name="Mateus Azevedo" age={22} country="Rio de Contas-BA" />
        
      </div>
    </div>
  )
}

export default App
