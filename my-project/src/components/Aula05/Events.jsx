function Events({ number }) {

    function myEvent() {
        console.log(`Opa! Fui ativado!!! ${number}`)
    }
    
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={myEvent}>Ativar!</button>
        </div>
    )
}

export default Events