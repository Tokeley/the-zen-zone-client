import { useState } from 'react'

export const useAddMix= () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const addMix = async (title, mix) => {
    setIsLoading(true)
    setError(null)

    // Retrieve the user object from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.token) {
      setError('User is not authenticated');
      setIsLoading(false);
      return;
    }

    const token = user.token;

    const response = await fetch('https://the-zen-zone-server.vercel.app/api/user/addMix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, mix })
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