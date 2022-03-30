import Styles from './Form.module.css'
import { useState } from 'react'

function Form() {
    function userAccount(e) {
        e.preventDefault()
        console.log(`Usuário ${name} - Senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    
    return (
        <div>
            <h1>Cadastre-se!</h1>
            <form action="" onSubmit={userAccount}>
                <div>
                    <label htmlFor="name">Nome de Usuário: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name='userName' 
                        placeholder="Digite seu nome" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name='userPassword' 
                        placeholder='Digite sua Senha' 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form