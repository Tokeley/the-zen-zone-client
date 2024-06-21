import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useMixContext} from "../hooks/useMixContext"
import SoundscapeUnit from '../components/SoundscapeUnit'
import SoundscapeUnitMobile from '../components/SoundscapeUnitMobile'

const Home = () => {
  const {user} = useAuthContext()
  const {mix} = useMixContext()
  const {navHeight} = useNavbarHeightContext()

  // State to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [mixLength, setMixLength] = useState(0);

  // Function to update the screen size state
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1051);
  };

  // Add event listener to update screen size state on window resize
  useEffect(() => {
    setMixLength(mix.length)
    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);
  
  }, []);


  return (
        <div className="text-darkGray" style={isSmallScreen ? {} : { display: "flex", width: "100%", height: `calc(100vh - ${navHeight}px)` }}>
          {mix && mix.map((soundscapeUnit) => (
            <SoundscapeUnit key={soundscapeUnit.soundscape._id} soundscapeUnit={soundscapeUnit} mobile={isSmallScreen} style={{width: "100%"}}/>
          ))}
        </div>
  )
}

export default Home