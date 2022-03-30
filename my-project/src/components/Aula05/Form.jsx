import Styles from './Form.module.css'
function Form() {

    function userAccount(e) {
        e.preventDefault()
        console.log('Usuário Cadastrado!')
    }

    return (
        <div>
            <h1>Cadastre-se!</h1>
            <form action="" onSubmit={userAccount}>
                <div>
                    <input className={Styles.nameSection} type="text" id="name" placeholder="Digite seu nome" required/>
                </div>
                <div>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form