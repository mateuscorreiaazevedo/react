const Events = ({ number }) => {

    const myEvent = () => {

        console.log(`Opa! fui ativado! ${number}`)
    }

    return (
        <div>
            <p>Clique para disparar um Evento</p>
            <button onClick={myEvent}>Active!</button>
        </div>
    )
}

export default Events