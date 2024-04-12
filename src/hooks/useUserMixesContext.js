import { UserMixesContext } from '../context/UserMixesContext'
import { useContext } from 'react'

export const useUserMixesContext = () => {
  const context = useContext(UserMixesContext)

  if (!context) {
    throw Error('useFavouritesContext must be used inside an UserMixesContextProvider')
  }

  return context
}