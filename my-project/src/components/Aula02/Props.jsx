import People from "./People"
function Props( {name, age, country} ) {
  const url = 'https://via.placeholder.com/150'
  return (
    <>
        <p>Olá! Meu nome é {name}, tenho {age} anos e sou natural da cidade de {country}.</p>
        <People name="Mateus Correia Azevedo" photo={url} age={22} birthdate="20/05/1999" country="Rio de Contas" />
    </>
  )
}

export default Props
