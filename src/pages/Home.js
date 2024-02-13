import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useAmbiencesContext} from "../hooks/useAmbiencesContext"
import AmbienceUnit from '../components/AmbienceUnit'

const Home = () => {
  const {user} = useAuthContext()
  const {ambiences, dispatch} = useAmbiencesContext()
  const {navHeight} = useNavbarHeightContext()

  console.log(ambiences);
    
  return (
      <div style={{height: `calc(100vh - ${navHeight}px)`, display: "flex", width: "100%"}}>
        {ambiences && ambiences.map((ambience) => (
          <AmbienceUnit key={ambience._id} ambience={ambience} style={{width: "100%"}}/>
        ))}
      </div>
  )
}

export default Home