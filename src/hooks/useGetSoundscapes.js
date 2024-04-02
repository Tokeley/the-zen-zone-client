import { useState } from 'react'

export const useGetSoundscapes = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getSoundscapes = async () => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/soundscapes/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
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
    
    return { getSoundscapes, isLoading, error }
}