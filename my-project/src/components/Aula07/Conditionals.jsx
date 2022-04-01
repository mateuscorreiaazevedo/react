import { useState } from "react"
import { Form } from "./Form"

export const Conditionals = () => {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }
    const CLEAR = () => setUserEmail('')

    return (
        <div>
            <h2>Cadastre-se</h2>
            <Form 
                send={sendEmail} 
                user={userEmail}
                clear={CLEAR} 
                change={(e) => setEmail(e.target.value)} 
            />
        </div>
    )


}