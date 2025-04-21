import React, { useContext, useState } from 'react';
import Categories from '../Components/Categories';
import Language from '../Components/Language';
import { JokeContext } from '../JokeContext';
import axios from 'axios';

function Home() {
  const { selectedCategories, language } = useContext(JokeContext);
  const [joke, setJoke] = useState(null);

  function ApiCall() {
    if (selectedCategories.length === 0) {
      console.log("No categories selected.");
      return;
    }

    const categoryParam = selectedCategories.join(',');

    axios
      .get(`https://v2.jokeapi.dev/joke/${categoryParam}?lang=${language}`)
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="bg-black min-h-screen text-white pt-10">
      <Categories />
      <Language />

      <div className="flex justify-center py-6">
        <button
          onClick={ApiCall}
          className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-xl shadow hover:bg-cyan-300 transition-all"
        >
          Search
        </button>
      </div>

      {joke && (
        <div className="bg-gray-900 mx-4 sm:mx-auto max-w-2xl mt-4 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-bold text-lime-400 mb-4">Joke Category: {joke.category}</h2>
          {joke.type === 'twopart' ? (
            <>
              <p className="text-white text-base mb-2">{joke.setup}</p>
              <p className="text-cyan-300 font-semibold">{joke.delivery}</p>
            </>
          ) : (
            <p className="text-white text-base">{joke.joke}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
