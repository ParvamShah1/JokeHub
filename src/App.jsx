
import './App.css'
import Navbar from "../src/Components/Navbar"
import Categories from './Components/Categories'
import { BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={Categories}/>
    </Routes>
    </BrowserRouter>
 </>
  )
}

export default App
