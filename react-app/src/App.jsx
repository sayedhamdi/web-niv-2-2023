import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Button from "./components/Button"
import Row from "./components/Row"
import Input from "./components/Input"
function App() {
  return (
    <div>
     <Navbar />
     <Card title="article 1" description="lorem lorem lorem"/> 
     <Card title="article 2" description="lorem lorem lorem"/> 
     <Row>
     <Button color="red" 
              background="transparent" 
              border="1px solid black"
      >
      Submit
     </Button>
     <Button color="red" 
              background="transparent" 
              border="1px solid black"
      >
      Submit
     </Button>
     <Button color="red" 
              background="transparent" 
              border="1px solid black"
      >
      Submit
     </Button>
     </Row>
     <Card /> 
     <Footer />
     <Input />
    </div>
  )
}



export default App
