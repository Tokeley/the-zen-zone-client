import { useState } from 'react'

export const useGetMixes = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getMixes = async (userId) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/getMixes', {
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

  return { getMixes, isLoading, error }
}