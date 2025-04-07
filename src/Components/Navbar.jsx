import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black h-20 flex items-center gap-8'>
    <h1 className='text-lime-400  px-4 font-bold text-4xl'>JokeHub</h1>
    <Link className='text-white'> My Saved Jokes</Link>
    <Link className='text-white' >Joke of the Day</Link>
    </div>
  )
}

export default Navbar