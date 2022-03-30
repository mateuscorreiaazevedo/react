import Button from "./Button"
function EventoProps() {
    function myEvent({ number }) {
        console.log(`Fui ativado! ${number}`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={myEvent} text="Enviar" />
        </div>
    )
}

export default EventoProps