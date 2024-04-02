import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useSoundscapesContext} from "../hooks/useSoundscapesContext"
import SoundscapeUnit from '../components/SoundscapeUnit'
import { useFavouritesContext } from '../hooks/useFavouritesContext';

const Home = () => {
  const {user} = useAuthContext()
  const {soundscapes, dispatch} = useSoundscapesContext()
  const {navHeight} = useNavbarHeightContext()

  return (
      <div className="text-darkGray" style={{ display: "flex", width: "100%", height: `calc(100vh - ${navHeight}px)` }}>
        {soundscapes && soundscapes.map((soundscape) => (
          <SoundscapeUnit key={soundscape._id} soundscape={soundscape} style={{width: "100%"}}/>
        ))}
      </div>
  )
}

export default Home