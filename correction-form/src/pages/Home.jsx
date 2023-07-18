import Form from "../components/Form"
export default function Home(){
    return( 
        <div>
              <ul>
                <button onClick={()=>{window.location.replace('/')}}>home</button>
                <button onClick={()=>{window.location.replace('/contact')}}>home</button>
            </ul>
            <h1>Home page</h1>
            <Form/>
        </div>
    )
}