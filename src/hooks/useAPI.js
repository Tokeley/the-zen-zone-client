import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

export const useAPI = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    setResponse(null)
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      // update loading state
      setIsLoading(false)
    }
  }

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }


  const getUserFavourites = async (userId) => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

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
      setResponse(json)
    }
  }

  const addSoundscapeToUserFavourites = async (userId, soundscapeId) => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

    const response = await fetch('/api/user/addSoundscapeToFavourites', {
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
      setResponse(json)
    }
  }

  const removeSoundscapeFromUserFavourites = async (userId, soundscapeId) => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

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
      setResponse(json)
    }
  }

  const getAllSoundScapes = async () => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

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
    setResponse(json)
    }
  }

  const getRandomSoundScape = async () => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

    const response = await fetch('/api/soundscapes/random', {
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
        setResponse(json)
    }
  }

  return { login, signup, getUserFavourites, addSoundscapeToUserFavourites, removeSoundscapeFromUserFavourites, getAllSoundScapes, getRandomSoundScape, isLoading, error, response }
}