import Item from "./content/Item"
function List() {
    return (
        <>
            <h2>Minha Lista</h2>
            <ul>
                <Item brand="Toyota" year={2016} />
                <Item brand="Honda" year={2010} />
                <Item brand="Renault" year={2018} />
            </ul>
        </>
    )
}
export default List