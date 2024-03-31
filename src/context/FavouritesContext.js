import { createContext, useReducer, useEffect } from 'react'

export const FavouritesContext = createContext()

export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'SET': 
        return {
            favourites: action.payload
        }
    case 'ADD':
      return { 
        favourites: [action.payload, ...state.favourites]
       }
    case 'REMOVE':
        console.log("payload: "+ action)
        return { 
            favourites: state.favourites.filter((a) => a._id !== action.payload._id)
        }
    default:
      return state
  }
}

export const FavouritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouritesReducer, { 
    favourites: []
  })

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites'))
    
    if (favourites) {
      dispatch({ type: 'SET', payload: favourites }) 
    }
  }, [])

  console.log('FavouritesContext state:', state)
  
  return (
    <FavouritesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </FavouritesContext.Provider>
  )

}