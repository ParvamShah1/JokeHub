import React, { useState, useEffect } from 'react';

function SavedJokes() {
  const [savedJokes, setSavedJokes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('savedJokes')) || [];
    setSavedJokes(stored);
  }, []);

  const removeJoke = (id) => {
    const updated = savedJokes.filter((joke) => joke.id !== id);
    setSavedJokes(updated);
    localStorage.setItem('savedJokes', JSON.stringify(updated));
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Saved Jokes</h1>
      {savedJokes.length === 0 ? (
        <p className="text-center text-gray-400">No jokes saved yet.</p>
      ) : (
        savedJokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-gray-800 p-4 rounded-xl shadow-md mb-4 max-w-2xl mx-auto"
          >
            <h2 className="text-lime-400 font-bold mb-2">{joke.category}</h2>
            {joke.type === 'twopart' ? (
              <>
                <p>{joke.setup}</p>
                <p className="text-cyan-300">{joke.delivery}</p>
              </>
            ) : (
              <p>{joke.joke}</p>
            )}
            <button
              onClick={() => removeJoke(joke.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
            >
              Unsave
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedJokes;
