import "./App.css"

function App() {
    const image = 'https://via.placeholder.com/250'
    return (
        <div className="App">
            <img src={image} alt="Imagem Qualquer" />
            <h1>Olá JSX</h1>
        </div>
    )
}

export default App;