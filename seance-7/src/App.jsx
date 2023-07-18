import { useEffect, useState } from "react"



export default function App(){
  const [counter,setCounter] = useState(0)
  const [counter2,setCounter2] = useState(10)


  useEffect(()=>{console.log("change")},[counter,counter2]) // cDU

  return (<div>
    <button onClick={()=>{setCounter(counter+1)}}>+</button>
    <button onClick={()=>{setCounter(counter-1)}}>-</button>
    counter : {counter}
    <br></br>
    <button onClick={()=>{setCounter2(counter2+1)}}>+</button>
    <button onClick={()=>{setCounter2(counter2-1)}}>-</button>
    counter : {counter2}
  </div>)
}