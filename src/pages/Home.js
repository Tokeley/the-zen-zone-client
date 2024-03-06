import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useSoundscapesContext} from "../hooks/useSoundscapesContext"
import SoundscapeUnit from '../components/SoundscapeUnit'

const Home = () => {
  const {user} = useAuthContext()
  const {soundscapes, dispatch} = useSoundscapesContext()
  const {navHeight} = useNavbarHeightContext()

  console.log(window.innerHeight);
    
  return (
      <div style={{ display: "flex", width: "100%", height: `calc(100vh - ${navHeight}px)` }}>
        {soundscapes && soundscapes.map((soundscape) => (
          <SoundscapeUnit key={soundscape._id} soundscape={soundscape} style={{width: "100%"}}/>
        ))}
      </div>
  )
}

export default Home