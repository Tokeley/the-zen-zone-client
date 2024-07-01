import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import {useMixContext} from "../hooks/useMixContext"
import SoundscapeUnit from '../components/SoundscapeUnit'
import { useParams } from 'react-router-dom';
import { useGetMix } from '../hooks/useGetMix';

const Home = ({playing, setPlaying}) => {
  const { encodedMix } = useParams();
  const {user} = useAuthContext()
  const {mix} = useMixContext()
  const {navHeight} = useNavbarHeightContext()
  const { initMix } = useMixContext()
  const { getMix, isLoading, error } = useGetMix();

  // State to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [mixLength, setMixLength] = useState(0);

  useEffect(() => {
    if (encodedMix) {
      const fetchMix = async () => {
        try {
          const decodedMix = atob(encodedMix)
          const response = await getMix(decodedMix)
          console.log(response)
          const mixFull = response
          const mix = mixFull.mix
          console.log("MIX: " + mix) 
          
          initMix(mix); // Update state with the fetched soundscapes
        } catch (error) {
          console.error('Error fetching mix:', error);
        }
      };
  
      fetchMix();
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
            <SoundscapeUnit key={soundscapeUnit.soundscape._id} soundscapeUnit={soundscapeUnit} mobile={isSmallScreen} lastSoundscape={mix.length===1}style={{width: "100%"}} playing={playing} setPlaying={setPlaying} />
          ))}
        </div>
    </>
        
  )
}

export default Home