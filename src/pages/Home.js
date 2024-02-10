import { useEffect }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useAmbiencesContext} from "../hooks/useAmbiencesContext"
import AmbienceUnit from '../components/AmbienceUnit'


const Home = () => {
  const {user} = useAuthContext()
  const {ambiences, dispatch} = useAmbiencesContext()
  const {navHeight} = useNavbarHeightContext()

  useEffect(() => {
    const fetchRandomAmbience= async () => {
      const response = await fetch('/api/ambiences/random')
      
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'ADD_SOUND', payload: json})
      }
    }
    
    fetchRandomAmbience();
  
  }, [])

  return (
      <div style={{height: `calc(100vh - ${navHeight}px)`, display: "flex", width: "100%"}}>
        {ambiences && ambiences.map((ambience) => (
          <AmbienceUnit key={ambience._id} ambience={ambience} style={{width: "100%"}}/>
        ))}
      </div>
  )
}

export default Home