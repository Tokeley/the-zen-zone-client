
import { createContext, useReducer, useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAddFavourite } from '../hooks/useAddFavourite'
import { useRemoveFavourite } from '../hooks/useRemoveFavourite'
import { useGetFavourites } from '../hooks/useGetFavourites'

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthContext();
  const { addFavourite: add, isLoading: addIsLoading, error: addError } = useAddFavourite();
  const { removeFavourite: remove, isLoading: removeIsLoading, error: removeError } = useRemoveFavourite();
  const { getFavourites, isLoading, error} = useGetFavourites();

  // Add a favorite
  const addFavourite = async (userId, soundscape) => {
    try {
      const response = await add(userId, soundscape);
      setFavourites(response.favourites);
    } catch (error) {
      console.error('Error adding favourite:', error);
    }
  };

  // Remove a favorite
  const removeFavourite = async ( soundscape) => {
    try {
      const response = await remove( soundscape);
      setFavourites(response.favourites);
    } catch (error) {
      console.error('Error removing favourite:', error);
    }
  };

  // Function to clear favourites when user logs out
  const clearFavouritesContext = () => {
    setFavourites([]);
  };


  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await getFavourites(user.id);
        setFavourites(response); // Update state with the fetched soundscapes
      } catch (error) {
        console.error('Error fetching favourite soundscapes:', error);
      }
    };

    if (user){
      fetchFavourites();
    }
  }, [user]); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <FavouritesContext.Provider value={{
      favourites,
      addFavourite,
      removeFavourite,
      clearFavouritesContext
    }}>
      { children }
    </FavouritesContext.Provider>
  )

}