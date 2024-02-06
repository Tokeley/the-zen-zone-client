import { NavbarHeightContext } from "../context/NavbarHeightContext"
import { useContext } from "react"

export const useNavbarHeightContext = () => {
  const context = useContext(NavbarHeightContext)

  if(!context) {
    throw Error('useNavbarHeightContext must be used inside an NavbarHeightContextProvider')
  }

  return context
}