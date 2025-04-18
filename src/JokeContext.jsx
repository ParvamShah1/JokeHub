import React, { createContext } from "react";
import { useState } from "react";
export const JokeContext = createContext();

export default function JokeProvider({children}){
    const categories = ['Any', 'Misc', 'Programming', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  const [selectedCategories, setSelectedCategories] = useState(['Programming']);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const categoriesList = ['Czech', 'German', 'English', 'Spanish', 'French', 'Portuguese'];
  const [language,setLaguage] = useState("English");
  function changeLang(category){
   setLaguage(category);
  }

  return(
    <JokeContext.Provider value={{categories,selectedCategories,setSelectedCategories,toggleCategory,categoriesList,language,setLaguage,changeLang}}>
        {children}
    </JokeContext.Provider>
  )
}