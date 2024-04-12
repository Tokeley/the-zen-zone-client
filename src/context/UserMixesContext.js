
import { createContext, useReducer, useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAddMix } from '../hooks/useAddMix'
import { useRemoveMix } from '../hooks/useRemoveMix'
import { useGetMixes } from '../hooks/useGetMixes'

export const UserMixesContext = createContext()

export const UserMixesContextProvider = ({ children }) => {
  const [mixes, setMixes] = useState([]);
  const { user } = useAuthContext();
  const { addMix: add } = useAddMix();
  const { removeMix: remove } = useRemoveMix();
  const { getMixes } = useGetMixes()

  // Add a favorite
  const addMix = async (userId, title, mix) => {
    try {
      const response = await add(userId, title, mix);
      setMixes(response.mixes);
    } catch (error) {
      console.error('Error adding mix:', error);
    }
  };

  // Remove a favorite
  const removeMix = async (userId, mixId) => {
    try {
      const response = await remove(userId, mixId);
      setMixes(response.mixes);
    } catch (error) {
      console.error('Error removing favourite:', error);
    }
  };

  // Function to clear favourites when user logs out
  const clearMixesContext = () => {
    setMixes([]);
  };


  useEffect(() => {
    const fetchMixes = async () => {
      try {
        const response = await getMixes(user.id);
        setMixes(response); // Update state with the fetched soundscapes
      } catch (error) {
        console.error('Error fetching mixes:', error);
      }
    };

    if (user){
        fetchMixes();
    }
  }, [user]); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <UserMixesContext.Provider value={{
      mixes,
      addMix,
      removeMix,
      clearMixesContext
    }}>
      { children }
    </UserMixesContext.Provider>
  )

}