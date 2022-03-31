import Button from "./Button"

function EventoProps() {

  const EVENT1 = () => console.log(`o primeiro evento foi ativado`)
  const EVENT2 = () => console.log(`o segundo evento foi ativado`)

  return (
    <div>
      <p>Clique aqui para ativar o evento</p>
      <Button place="Ative-me!" event={EVENT1}/>
      <Button place="Ative-me!" event={EVENT2}/>
    </div>
  )
}

export default EventoProps