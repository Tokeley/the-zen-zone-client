import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon } from './Icons';


import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar'; 


const Navbar = ({saveMixDialog}) => {
  const { dispatch} = useNavbarHeightContext();
  const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
  const [playing, setPlaying] = useState(true)
  

  let header = useRef(null);

  useEffect(() => {
    dispatch({type: 'SET_NAVBAR_HEIGHT', payload: header.current.offsetHeight});
  },[contextPlaying, dispatch ]);

  useEffect(() => {
    soundDispatch({type: 'SET_PLAYING', payload: !playing});
  }, [playing])

  return (
    <header>
      <div className={`bg-cream text-gray border-b-2`} ref={header}>
        <div className="hidden md:flex">
          <DesktopNavbar saveMixDialog={saveMixDialog} setPlaying={setPlaying} playing={playing}/>
        </div>
        <div className="flex md:hidden">
          <MobileNavbar saveMixDialog={saveMixDialog} setPlaying={setPlaying} playing={playing}/>
        </div>
      </div>
    </header>
  )
}

export default Navbar