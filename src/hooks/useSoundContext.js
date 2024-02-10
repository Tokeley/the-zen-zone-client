import { SoundContext } from "../context/SoundContext"
import { useContext } from "react"

export const useSoundContext = () => {
  const context = useContext(SoundContext)

  if(!context) {
    throw Error('useSoundContext must be used inside an AuthContextProvider')
  }

  return context
}