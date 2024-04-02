import { useState } from 'react'

export const useGetRandomSoundscape = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getRandomSoundscape = async () => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/soundscapes/random', {
      method: 'POST',
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
    
    return { getRandomSoundscape, isLoading, error }
}