import { useState } from 'react'

export const useGetMix = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getMix = async (mixId) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`/api/mix/getMix/${mixId}`, {
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

  return { getMix, isLoading, error }
}