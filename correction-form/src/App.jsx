import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

export  default function App(){
  if(window.location.pathname =="/")
    return <Home />
  else if (window.location.pathname =="/contact")
    return <Contact />
  else 
    return <NotFound />

}