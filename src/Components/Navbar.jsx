import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black h-20 flex items-center px-4 gap-4 sm:gap-8 fixed w-full z-50">
      <Link to="/"><h1 className="text-lime-400 font-bold text-2xl sm:text-4xl">JokeHub</h1></Link>
      <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
        <Link to="/savedjokes" className="text-white hover:text-cyan-400">My Saved Jokes</Link>
        <Link to="/jokeoftheday" className="text-white hover:text-cyan-400">Joke of the Day</Link>
        <Link to="/submitjoke" className="text-white hover:text-cyan-400">Submit your own joke</Link>

      </div>
    </div>
  );
};

export default Navbar;
