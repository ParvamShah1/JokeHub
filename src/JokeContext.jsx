import React, { createContext, useState } from "react";

export const JokeContext = createContext();

export default function JokeProvider({ children }) {
  const categories = ['Any', 'Misc', 'Programming', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  const [selectedCategories, setSelectedCategories] = useState(['Programming']);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const languageMap = {
    English: "en",
    German: "de",
    Spanish: "es",
    French: "fr",
    Portuguese: "pt",
    Czech: "cs",
  };

  const categoriesList = Object.keys(languageMap); 

  const [language, setLanguage] = useState("en");

  function changeLang(selectedLang) {
    const code = languageMap[selectedLang];
    setLanguage(code || "en");
  }

  return (
    <JokeContext.Provider
      value={{
        categories,
        selectedCategories,
        setSelectedCategories,
        toggleCategory,
        categoriesList, 
        language,
        setLanguage,
        changeLang,
      }}
    >
      {children}
    </JokeContext.Provider>
  );
}
