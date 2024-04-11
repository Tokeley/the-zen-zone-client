import { MixContext } from '../context/MixContext'
import { useContext } from 'react'

export const useMixContext = () => {
  const context = useContext(MixContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an MixContextProvider')
  }

  return context
}