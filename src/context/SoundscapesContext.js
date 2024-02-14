import { createContext, useReducer, useEffect } from 'react'

export const SoundscapesContext = createContext()

export const soundscapesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SOUND':
      return {
        soundscapes: action.payload
      }
    case 'INIT_SOUND':
        return {
          soundscapes: [action.payload]
        }
    case 'ADD_SOUND':
      return { 
        soundscapes: [action.payload, ...state.soundscapes]
     }
    case 'REMOVE_SOUND':
      return { 
        soundscapes: state.soundscapes.filter((a) => a._id !== action.payload._id)
     }
    default:
      return {
        soundscapes: [...state.soundscapes]
      }
  }
}

export const SoundscapesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(soundscapesReducer, { 
    soundscapes: []
  })

  useEffect(() => {
    const storedSoundscapes = JSON.parse(localStorage.getItem('soundscapes'));
    console.log("get local storage");
    if (storedSoundscapes) {
      dispatch({ type: 'SET_SOUND', payload: storedSoundscapes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('soundscapes', JSON.stringify(state.soundscapes));
  }, [state.soundscapes]);
  
  return (
    <SoundscapesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </SoundscapesContext.Provider>
  )

}