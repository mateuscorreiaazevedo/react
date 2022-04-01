import { YourName } from "./YourName";
import { useState } from "react";
import { Hello } from "./Hello";
export function StateLift() {
    const [name, setName] = useState()
    
    return (
        <div>
            <p>Digite seu Nome:</p>
            <YourName setName={setName} />
            <Hello name={name}/>
        </div>
    )
}