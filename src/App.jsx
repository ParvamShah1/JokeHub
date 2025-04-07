
import './App.css'
import Navbar from "../src/Components/Navbar"
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
 </>
  )
}

export default App
