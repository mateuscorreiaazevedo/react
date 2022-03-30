function Item({ brand, year }) {
    return (
        <>
            <li>
                <h2>{brand}</h2>
                <strong>{year}</strong>
            </li>
        </>
    )
}

export default Item