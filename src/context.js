import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, SetSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);
  // Get Cocktails Data
  const getCocktails = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json;
    console.log(data);
  };
  useEffect(() => {
    getCocktails();
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        searchTerm,
        SetSearchTerm,
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
