import { useState } from 'react'

export const useRemoveMix= () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const removeMix = async (userId, mixId) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/removeMix', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ userId, mixId })
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
    
    return { removeMix, isLoading, error }
}