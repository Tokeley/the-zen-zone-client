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

  // Function to update the screen size state
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Using Tailwind's "sm" breakpoint (640px)
  };

  // Add event listener to update screen size state on window resize
  useEffect(() => {
    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);


  return (
    <>
      { !isSmallScreen ? 
        <div className="text-darkGray flex" style={{width: "100%", height: `calc(100vh - ${navHeight}px)` }}>
          {mix && mix.map((soundscapeUnit) => (
            <SoundscapeUnit key={soundscapeUnit.soundscape._id} soundscapeUnit={soundscapeUnit} style={{width: "100%"}}/>
          ))}
        </div>
        :
        <div className=" sm:hidden">
          {mix && mix.map((soundscapeUnit) => (
            <SoundscapeUnitMobile key={soundscapeUnit.soundscape._id} soundscapeUnit={soundscapeUnit} style={{width: "100%"}}/>
          ))}
        </div>
      }
    </>
  )
}

export default Home