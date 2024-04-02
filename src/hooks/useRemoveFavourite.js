import { useState } from 'react'

export const useRemoveFavourite = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const removeFavourite = async (userId, soundscapeId) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/removeSoundscapeFromFavourites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ userId, soundscapeId })
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
    
    return { removeFavourite, isLoading, error }
}