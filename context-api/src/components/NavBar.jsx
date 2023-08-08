import { useContext } from "react"
import {  useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from "../context"
import LinkPlus from "./LinkPlus"

export default function NavBar(){
    const {username,setUserName} = useContext(UserContext)
    const navigate = useNavigate()
    const Links = [
        {to:'/',text:'Home'},
        {to:'/about',text:'About'},
        {to :'/login',text:'Login'}
    ]
    const handleLogout = ()=>{
        setUserName('')
        navigate("/login")
        toast.info("Logout Success")
    }
    return (
        <nav>
            <ul style={{display:'flex',justifyContent:'space-between',listStyle:'none'}}>
                {Links.map((link,index)=>(
                    <li key={index}>
                        <LinkPlus to={link.to}>{link.text}</LinkPlus>
                    </li>
                ))}
                <li>
                    { username}
                </li>
                <button onClick={handleLogout}>logout</button>
            </ul>
        </nav>
    )
}