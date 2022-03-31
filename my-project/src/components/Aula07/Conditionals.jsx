import { useState } from 'react'

export function Conditionals() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    const clearEmail = () => setUserEmail('')

    return (
        <div>
            <b>Cadastre seu email:</b>
            <form action="">
                <input 
                    type="email"
                    name="email" 
                    id="email"
                    placeholder="digite seu email aqui"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={sendEmail} type="submit">Enviar</button>
                {userEmail &&(
                    <div>
                        <p>O email do usuário é: <b>{userEmail}</b></p>
                        <button onClick={clearEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}
