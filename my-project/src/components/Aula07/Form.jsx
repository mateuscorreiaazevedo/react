export const Form = ({ send, clear, change, user }) => {
    return (
        <form action="">
            <input type="email" name="email" id="email" placeholder="Digite seu email." onChange={change} />
            <button type="submit" onClick={send}>Enviar</button>
            {user &&(
                <div>
                    <p>O email cadastrado é: <b>{user}</b></p>
                    <button onClick={clear}>Limpar</button>
                </div>
            )}
        </form>
    )
}