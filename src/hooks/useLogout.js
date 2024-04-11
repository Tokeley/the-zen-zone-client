import { useAuthContext } from './useAuthContext'
import { useFavouritesContext } from './useFavouritesContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { clearFavouritesContext } = useFavouritesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })

    clearFavouritesContext();

  }

  return { logout }
}