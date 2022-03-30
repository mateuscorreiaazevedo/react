import "./App.css";
// import HelloWorld from "./components/Aula01/HelloWorld";
// import Frase from "./components/Aula01/Frase";
// import Props from "./components/Aula02/Props";
// import Test from "./components/Aula03/Test";
// import List from "./components/Aula04/List";
// import Events from "./components/Aula05/Events";
import Form from "./components/Aula05/Form";

function App() {
  return (
    <div className="App">
      {/* <div>
        <h1>Aula 01</h1>
        <HelloWorld />
        <Frase name="Marcos" />
      </div>
      <div>
        <h1>Aula 02</h1>
        <Props name="Mateus Azevedo" age={22} country="Rio de Contas-BA" />
      </div>
      <div>
        <h1>Aula 03</h1>
        <Test />
      </div>
      <div>
        <h1>Aula 04</h1>
        <List />
      </div>
      <div>
        <h1>Aula 05</h1>
        <Events number={1}/>
        <Events number={2}/>
      </div> */}
        <Form />
    </div>
  );
}

export default App;
