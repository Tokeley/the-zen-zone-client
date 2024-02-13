import { createContext, useReducer, useEffect } from 'react'

export const AmbiencesContext = createContext()

export const ambiencesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SOUND':
      return {
        ambiences: action.payload
      }
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
      return {
        ambiences: [...state.ambiences]
      }
  }
}

export const AmbiencesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ambiencesReducer, { 
    ambiences: []
  })

  useEffect(() => {
    const storedAmbiences = JSON.parse(localStorage.getItem('ambiences'));
    console.log("get local storage");
    if (storedAmbiences) {
      dispatch({ type: 'SET_SOUND', payload: storedAmbiences });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ambiences', JSON.stringify(state.ambiences));
  }, [state.ambiences]);
  
  return (
    <AmbiencesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AmbiencesContext.Provider>
  )

}