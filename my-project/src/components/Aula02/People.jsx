function People({ name, photo, age, birthdate, country }) {
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Nome: {name}</h2>
            <ol>
                <li>Idade: {age}</li>
                <li>Data de Nascimento: {birthdate}</li>
                <li>Cidade: {country}</li>
            </ol>
        </div>
    )
}

export default People