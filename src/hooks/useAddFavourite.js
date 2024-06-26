import { useState } from 'react'

export const useAddFavourite = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const addFavourite = async (soundscapeId) => {
    setIsLoading(true)
    setError(null)

    console.log("SSID: " + soundscapeId)
    // Retrieve the user object from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("USER: " + user)
    if (!user || !user.token) {
      setError('User is not authenticated');
      setIsLoading(false);
      return;
    }

    const token = user.token;
    console.log("TOKEN: " + token)
    const response = await fetch('/api/user/addSoundscapeToFavourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ soundscapeId })
    })

    const json = await response.json()

    console.log("RESPONSE: " + JSON.stringify(json))
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
    
    return { addFavourite, isLoading, error }
}