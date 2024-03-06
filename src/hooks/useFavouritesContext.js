import { FavouritesContext } from '../context/FavouritesContext'
import { useContext } from 'react'

export const useFavouritesContext = () => {
  const context = useContext(FavouritesContext)

  if (!context) {
    throw Error('useFavouritesContext must be used inside an FavouritesContextProvider')
  }

  return context
}