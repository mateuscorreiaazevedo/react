export function Lists({ items }) {

    return (
        <>
        <h3>Lista de Framework</h3>
        {
            items.length > 0 ? (
                items.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))
            ) : (
                <p>Não há itens!</p>
            )
        }
        </>
    )
}