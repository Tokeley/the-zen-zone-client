import { AmbiencesContext } from '../context/AmbiencesContext'
import { useContext } from 'react'

export const useAmbiencesContext = () => {
  const context = useContext(AmbiencesContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an AmbiencesContextProvider')
  }

  return context
}