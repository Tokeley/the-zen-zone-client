import { useState } from 'react'

export const useAddMix= () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const addMix = async (userId, title, mix) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/addMix', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ userId, title, mix })
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
    
    return { addMix, isLoading, error }
}