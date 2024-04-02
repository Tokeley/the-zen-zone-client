import { useState } from 'react'

export const useGetFavourites = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getFavourites = async (userId) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/getFavourites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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