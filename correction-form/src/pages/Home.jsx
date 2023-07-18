import Form from "../components/Form"
import  {useState} from "react"
export default function Home(){
    const [todos,setTodos] = useState([])
    function addTodo(){

    }
    return( 
        <div>
              <ul>
                <button onClick={()=>{window.location.replace('/')}}>home</button>
                <button onClick={()=>{window.location.replace('/contact')}}>home</button>
            </ul>
            <h1>Home page</h1>
            <Form/>
            <ul>
               {todos.length==0 ? 'no elements to show ' : todos.map(todo=><li>{todo}</li>)}
            </ul>
            <input type="text" />
            <button onClick={()=>setTodos([...todos,"mohsen"])}>add</button>
        </div>
    )
}