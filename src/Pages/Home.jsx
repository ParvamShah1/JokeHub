import React, { useContext, useState, useEffect } from 'react';
import Categories from '../Components/Categories';
import Language from '../Components/Language';
import { JokeContext } from '../JokeContext';
import axios from 'axios';

function Home() {
  const { selectedCategories, language } = useContext(JokeContext);
  const [joke, setJoke] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const ApiCall = () => {
    if (selectedCategories.length === 0) return;

    const categoryParam = selectedCategories.join(',');

    axios
      .get(`https://v2.jokeapi.dev/joke/${categoryParam}?lang=${language}`)
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (!joke) {
      setIsSaved(false);
      return;
    }

    const saved = JSON.parse(localStorage.getItem('savedJokes')) || [];
    const exists = saved.some((j) => j.id === joke.id);
    setIsSaved(exists);
  }, [joke]);

  const toggleSaveJoke = () => {
    const saved = JSON.parse(localStorage.getItem('savedJokes')) || [];

    if (isSaved) {
      const updated = saved.filter((j) => j.id !== joke.id);
      localStorage.setItem('savedJokes', JSON.stringify(updated));
      setIsSaved(false);
    } else {
      saved.push(joke);
      localStorage.setItem('savedJokes', JSON.stringify(saved));
      setIsSaved(true);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white pt-10">
      <Categories />
      <Language />

      <div className="flex justify-center py-6 gap-4">
        <button
          onClick={ApiCall}
          className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-xl shadow hover:bg-cyan-300 transition-all"
        >
          Search
        </button>
        {joke && (
          <button
            onClick={toggleSaveJoke}
            className={`${
              isSaved ? 'bg-red-400 hover:bg-red-300' : 'bg-lime-400 hover:bg-lime-300'
            } text-black font-semibold px-6 py-2 rounded-xl shadow transition-all`}
          >
            {isSaved ? 'Unsave' : 'Save'}
          </button>
        )}
      </div>

      {joke && (
        <div className="bg-gray-900 mx-4 sm:mx-auto max-w-2xl mt-4 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-bold text-lime-400 mb-4">
            Joke Category: {joke.category}
          </h2>
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
