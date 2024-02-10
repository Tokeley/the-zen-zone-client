import { createContext, useReducer } from 'react'

export const SoundContext = createContext()

export const soundReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYING':
      return { playing: action.payload }
    default:
      return state
  }
}

export const SoundContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(soundReducer, { 
    playing: false
  })

  
  return (
    <SoundContext.Provider value={{ ...state, dispatch }}>
      { children }
    </SoundContext.Provider>
  )

}