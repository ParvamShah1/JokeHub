import React, { useState } from 'react';

const SubmitJoke = () => {
  const [jokeType, setJokeType] = useState('single');
  const [joke, setJoke] = useState('');
  const [setup, setSetup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (jokeType === 'single' && joke.trim().length < 10) {
      setError('Single joke must be at least 10 characters.');
      return;
    }

    if (jokeType === 'twopart') {
      if (setup.trim().length < 5 || delivery.trim().length < 5) {
        setError('Setup and delivery must be at least 5 characters each.');
        return;
      }
    }

    const submittedJoke =
      jokeType === 'single'
        ? { type: 'single', joke }
        : { type: 'twopart', setup, delivery };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('userJokes')) || [];
    localStorage.setItem('userJokes', JSON.stringify([...existing, submittedJoke]));

    setSuccess('Joke submitted successfully!');
    setJoke('');
    setSetup('');
    setDelivery('');
  };

  return (
    <div className="bg-black min-h-screen text-white py-10 px-4 sm:px-8">
      <h1 className="text-2xl font-bold text-center mb-6">Submit Your Own Joke</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Joke Type</label>
          <select
            value={jokeType}
            onChange={(e) => setJokeType(e.target.value)}
            className="w-full p-2 rounded bg-white text-black"
          >
            <option value="single">Single</option>
            <option value="twopart">Two Part</option>
          </select>
        </div>

        {jokeType === 'single' ? (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Joke</label>
            <textarea
              value={joke}
              onChange={(e) => setJoke(e.target.value)}
              className="w-full p-2 rounded bg-white text-black"
              rows="4"
              placeholder="Write your joke here..."
            />
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Setup</label>
              <input
                value={setup}
                onChange={(e) => setSetup(e.target.value)}
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Setup"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Delivery</label>
              <input
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Delivery"
              />
            </div>
          </>
        )}

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

        <button
          type="submit"
          className="bg-lime-400 hover:bg-lime-300 text-black px-6 py-2 rounded-xl font-semibold"
        >
          Submit Joke
        </button>
      </form>
    </div>
  );
};

export default SubmitJoke;
