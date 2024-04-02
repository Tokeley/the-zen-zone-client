


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