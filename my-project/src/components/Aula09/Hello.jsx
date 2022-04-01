export function Hello({ name }) {
    function sendHello(randow) {
        return `Olá ${randow}, tudo bem?`
    }
    return (
        <>
            {name && <p>{sendHello(name)}</p>}
        </>
    )
}