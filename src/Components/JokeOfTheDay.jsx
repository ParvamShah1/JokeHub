import React, { useContext, useState, useEffect } from 'react';
import { JokeContext } from '../JokeContext';
import axios from 'axios';

const JokeOfTheDay = () => {
  const { language } = useContext(JokeContext);
  const [joke, setJoke] = useState(null);
  const today = new Date().toDateString();

  useEffect(() => {
    const storedDate = localStorage.getItem('jokeDate');
    const storedJoke = localStorage.getItem('jokeOfTheDay');

    if (storedDate === today && storedJoke) {
      setJoke(JSON.parse(storedJoke));
    } else {
      fetchJokeOfTheDay();
    }
  }, [language]);

  const fetchJokeOfTheDay = () => {
    axios
      .get(`https://v2.jokeapi.dev/joke/Programming?lang=${language}`)
      .then((response) => {
        const randomJoke = response.data;
        setJoke(randomJoke);
        localStorage.setItem('jokeOfTheDay', JSON.stringify(randomJoke));
        localStorage.setItem('jokeDate', today);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!joke) {
    return (
      <div className="bg-black text-white min-h-screen flex justify-center items-center">
        <p>Loading Joke of the Day...</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center pt-10">
      <h1 className="text-xl font-semibold mb-4">Joke of the Day</h1>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center max-w-2xl">
        {joke.type === 'twopart' ? (
          <>
            <p className="text-white text-base mb-2">{joke.setup}</p>
            <p className="text-cyan-300 font-semibold">{joke.delivery}</p>
          </>
        ) : (
          <p className="text-white text-base">{joke.joke}</p>
        )}
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>Last updated: {today}</p>
      </div>
    </div>
  );
};

export default JokeOfTheDay;
