import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
     <Navbar />
     <Card title="article 1" description="lorem lorem lorem"/> 
     <Card title="article 2" description="lorem lorem lorem"/> 
     <Card /> 
     <Footer />
    </div>
  )
}



export default App
