import React, { useContext, useState } from 'react';
import { JokeContext } from '../JokeContext';

const Categories = () => {
  

  const {categories,selectedCategories,setSelectedCategories,toggleCategory} = useContext(JokeContext)
  return (
    <>
      <h1 className="bg-black text-white text-xl md:text-2xl pt-28 text-center font-semibold">
        Select Category
      </h1>
      <div className="bg-black py-6 px-4 flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => toggleCategory(category)}
            className={`px-4 sm:px-6 py-2 rounded-xl shadow text-sm sm:text-base font-semibold transition-all
              ${selectedCategories.includes(category)
                ? 'bg-cyan-400 text-black'
                : 'bg-lime-400 text-black hover:bg-cyan-300'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
