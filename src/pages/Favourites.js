import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const Favourites = () => {
  const { user } = useAuthContext()
  console.log(user ? "user" : "no user");
  console.log("TEST");
  return (
    <span className="text-6xl">FAVOURITES</span>
  )
}

export default Favourites