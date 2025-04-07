import React, { useEffect, useState } from 'react';

const Language = () => {
  const categoriesList = ['Czech', 'German', 'English', 'Spanish', 'French', 'Portuguese'];
  const [language,setLaguage] = useState("English");
  function changeLang(category){
   setLaguage(category);
  }

  return (
    <>
      <h1 className="bg-black text-white text-xl md:text-2xl pt-10 text-center font-semibold">
        Select Language
      </h1>
      <div className="bg-black py-6 px-4 flex flex-wrap justify-center gap-3 sm:gap-4">
        {categoriesList.map((category, index) => (
          <button
            key={index}
            className={`px-4 sm:px-6 py-2 rounded-xl shadow text-sm sm:text-base font-semibold transition-all
                ${language === category ? 'bg-cyan-400 text-black' : 'bg-lime-400 text-black hover:bg-cyan-300'}`}
                        onClick={()=>{changeLang(category)}}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Language;
