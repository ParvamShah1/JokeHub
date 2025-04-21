
import './App.css'
import Navbar from "../src/Components/Navbar"
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import JokeProvider from './JokeContext'
import JokeOfTheDay from './Components/JokeOfTheDay'
import SavedJokes from './Components/SavedJokes'
import SubmitJoke from './Components/SubmitYourOwnJoke'
function App() {

  return (
    <>
    <JokeProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/jokeoftheday" element={<JokeOfTheDay/>}/>
      <Route path="/savedjokes" element={<SavedJokes/>}/>
      <Route path="/submitjoke" element={<SubmitJoke/>}/>



    </Routes>
    </BrowserRouter>
    </JokeProvider>
 </>
  )
}

export default App
