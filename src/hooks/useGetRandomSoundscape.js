import { useState } from 'react'

export const useGetRandomSoundscape = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getRandomSoundscape = async () => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://the-zen-zone-server.vercel.app/api/soundscapes/random', {
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
    
    return { getRandomSoundscape, isLoading, error }
}