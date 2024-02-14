import { SoundscapesContext } from '../context/SoundscapesContext'
import { useContext } from 'react'

export const useSoundscapesContext = () => {
  const context = useContext(SoundscapesContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an SoundscapesContextProvider')
  }

  return context
}