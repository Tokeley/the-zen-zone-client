import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useMixContext} from "../hooks/useMixContext"
import SoundscapeUnit from '../components/SoundscapeUnit'
import { useParams } from 'react-router-dom';

const Home = () => {
  const { encodedMix } = useParams();
  const {user} = useAuthContext()
  const {mix} = useMixContext()
  const {navHeight} = useNavbarHeightContext()
  const { initMix } = useMixContext()

  // State to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [mixLength, setMixLength] = useState(0);

  useEffect(() => {
    if (encodedMix) {
      console.log("EM: " + encodedMix)
      try {
        const decodedData = atob(encodedMix);
        const parsedData = JSON.parse(decodedData);
        initMix(parsedData)
      } catch (error) {
        console.error('Error decoding or parsing mix data:', error);
      }
    }
  }, [encodedMix]);


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
    <>
      <div  className={`text-darkGray ${isSmallScreen ? 'drop-shadow-xl' : ''}`} style={isSmallScreen ? {} : { display: "flex", width: "100%", height: `calc(100vh - ${navHeight}px)` }}>
          {mix && mix.map((soundscapeUnit) => (
            <SoundscapeUnit key={soundscapeUnit.soundscape._id} soundscapeUnit={soundscapeUnit} mobile={isSmallScreen} style={{width: "100%"}}/>
          ))}
        </div>
    </>
        
  )
}

export default Home