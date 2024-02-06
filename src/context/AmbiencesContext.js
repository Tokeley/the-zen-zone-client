import { createContext, useReducer, useEffect } from 'react'

export const AmbiencesContext = createContext()

export const ambiencesReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_SOUND':
        return {
          ambiences: [action.payload]
        }
    case 'ADD_SOUND':
      return { 
        ambiences: [action.payload, ...state.ambiences]
     }
    case 'REMOVE_SOUND':
      return { 
        ambiences: state.ambiences.filter((a) => a._id !== action.payload._id)
     }
    default:
      return state
  }
}

export const AmbiencesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ambiencesReducer, { 
    ambiences: []
  })
  
  return (
    <AmbiencesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AmbiencesContext.Provider>
  )

}