
import './App.css'
import Navbar from "../src/Components/Navbar"
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import JokeProvider from './JokeContext'

function App() {

  return (
    <>
    <JokeProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
    </JokeProvider>
 </>
  )
}

export default App
