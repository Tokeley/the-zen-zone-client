import { createContext, useReducer, useEffect, useState } from 'react'

export const FavouritesContext = createContext()


export const FavouritesContextProvider = ({ children }) => {
  const [state, setState] = useState([])
  
  return (
    <FavouritesContext.Provider value={{ state }}>
      { children }
    </FavouritesContext.Provider>
  )

}