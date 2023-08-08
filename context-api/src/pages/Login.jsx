
import { useContext,useState} from "react"
import NavBar from "../components/NavBar"
import { useNavigate} from "react-router-dom"
import { UserContext } from "../context"
import { toast } from "react-toastify"

export default function Login() {
    const navigate = useNavigate()
    const {  setUserName } = useContext(UserContext)
    const [ form, setForm ] = useState({username:'',password:''})
    const handleLogin = ()=>{
        setUserName(form.username)
        console.log(form)
        toast.success("Login Success")
        navigate('/')
    }
    return (
        <div>
            <NavBar></NavBar>
            <h1>Login</h1>
            <label>
                username
                <input type="text" 
                       value={form.username} 
                       onChange={e=>setForm({...form,username:e.target.value})}
                />
            </label>
            <label>
                password
                <input type="password" 
                       value={form.password}
                       onChange={e=>setForm({...form,password:e.target.value})}
                />
            </label>
            <button onClick={handleLogin}>login</button>
        </div>
    );
}
