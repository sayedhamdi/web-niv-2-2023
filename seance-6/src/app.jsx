
import {useState} from "react"
import ComponentKdim from "./ComponentKdim"

// stateful
export function App() {
  /*==let counter = 0
  const increment = ()=>{
    let counterH1 = document.querySelector("#counter")
    counter ++
    counterH1.innerHTML= counter
  }*/

  // rerender
  const [show,setShow]= useState(true)
  function removeComponent9dim(){
    setShow(false)
  }
  return (
    <div>
      {/*<button onclick={removeComponent9dim}>remove</button>
      {show ? <ComponentKdim /> : '' }
      <Button text="Bonjour" />
      <Counter />
      <Counter />

      */}
      <ZaamaChnowaEl3che />
    </div>
  )
}

// stateless
function Button({text}){
  return <button>{text}</button>
}


function Counter(){

  const [counter,setCounter] = useState(0)

  const increment = ()=>{
    setCounter(counter+1)
  }
  return (
    <div>
      <h1 >{counter}</h1>
      <button onclick={increment} >click me</button>
    </div>
  )
}


function ZaamaChnowaEl3che(){


  let [mekla,setMekla] = useState("couscous")

  return (
    <>
      {mekla =="couscous" && <Couscous />}
      {mekla =="tajin" && <Tajin />}
      <input type="text" value={mekla} onChange={e=>setMekla(e.target.value)}/>
    </>
  )

}

function Tajin(){
  return <img src="https://img-3.journaldesfemmes.fr/HbJO8Q7fNXl-wLy_h0jrVllm6Rw=/750x500/smart/64162707a1624c639b2d8f896d12fbc6/recipe-jdf/343345.jpg" alt="" />
}

function Couscous(){
  return <img src="https://www.thespruceeats.com/thmb/BsK8ZMSBIle9uiYNefNDyeDIYaw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/couscous-getty-3890-x-2562-56a645de5f9b58b7d0e0c3b1-af93f1c24efb43b9a3c143eba611aabd.jpg" />
}