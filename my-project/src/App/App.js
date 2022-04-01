import "../App.css";
import { Lists } from "../components/Aula08/Lists";

export default function App() {

  const myItems = [
    {id: 1, name: 'Mateus Azevedo', age: 22},
    {id: 2, name: 'Clara Oliveira', age: 23},
    {id: 3, name: 'Marcos Azevedo', age: 33}
  ]
  
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <Lists items={myItems} />
      <Lists items={[]} />
    </div>
  )

}