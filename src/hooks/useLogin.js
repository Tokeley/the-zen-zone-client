import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useFavouritesContext } from './useFavouritesContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const { dispatch: favDispatch} = useFavouritesContext();

  const setFavouritesContext = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id
    console.log(user);
    console.log(userId);
    const favourites = [];
    const response = await fetch(`/api/user/getFavourites`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    });
    if (!response.ok) {
      const json = await response.json()
      console.log(json.error);
    }
    if (response.ok) {
      const favouritesData = await response.json();
      console.log("Favs from fetch:" + JSON.stringify(favouritesData));
      favourites = favouritesData.favorites;

      localStorage.setItem('favourites', JSON.stringify(favourites))
      favDispatch({type: 'SET', payload: favourites});
    }
    
  }

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // Get user favourites
      setFavouritesContext(); 

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}