import { createContext, useReducer, useEffect } from 'react'

export const NavbarHeightContext = createContext()

export const navHeighthReducer = (state, action) => {
    console.log("action payload: "+action.payload);
  switch (action.type) {
    case 'SET_NAVBAR_HEIGHT':
      return { navHeight: action.payload }
    default:
      return state
  }
}

export const NavbarHeightContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navHeighthReducer, { 
    navHeight: 0
  })

  
  return (
    <NavbarHeightContext.Provider value={{ ...state, dispatch }}>
      { children }
    </NavbarHeightContext.Provider>
  )

}