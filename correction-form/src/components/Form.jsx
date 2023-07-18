import {  useState } from "react"
import Input from "./Input"
export default function Form(){
    const [email,setEmail] = useState('')
    const [error,setError] = useState('')


    const handleEmailChange = (e)=>setEmail( e.target.value ) 




    const handleSubmit = (e)=>{
        e.preventDefault()
        // controle de saisie
        if(email.length < 5)
            setError("erreur fel email a9al men 5")
        else 
            setError("")

        console.log("tebaath el form")
    }
    return (
        <form onSubmit={handleSubmit}>
            {error.length == 0 ? ' ': <span style={{color:"red"}}>{error}</span>}
            <Input placeholder="email" type="email" value={email} handleChange={handleEmailChange}/>
            <button>envoyer</button>
        </form>
    )
}