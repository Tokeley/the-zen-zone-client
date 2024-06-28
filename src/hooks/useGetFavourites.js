import { useState } from 'react'

export const useGetFavourites = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getFavourites = async (userId) => {
    setIsLoading(true)
    setError(null)

     // Retrieve the user object from localStorage
     const user = JSON.parse(localStorage.getItem('user'));

     if (!user || !user.token) {
       setError('User is not authenticated');
       setIsLoading(false);
       return;
     }
 
     const token = user.token;

    const response = await fetch('https://the-zen-zone-server.vercel.app/api/user/getFavourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userId })
    })

    const json = await response.json()
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      setIsLoading(false)
      return json
    }

    return []
  }

  return { getFavourites, isLoading, error }
}