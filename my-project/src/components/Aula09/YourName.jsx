export function YourName({ setName }) {

    return (
        <>
            <input type="text" placeholder="Digite seu nome." onChange={(e) => setName(e.target.value)} />
        </>
    )
}