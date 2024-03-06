import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon } from './Icons';

import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar'; 


const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { dispatch} = useNavbarHeightContext();
  const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
  const [playing, setPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  let header = useRef(null);

  useEffect(() => {
    dispatch({type: 'SET_NAVBAR_HEIGHT', payload: header.current.offsetHeight});
    setPlaying(contextPlaying);
  },[contextPlaying, dispatch ]);

  const handleLogout = () => {
    logout()
  }


  const handlePlayBittonClick = () => {
    soundDispatch({type: 'SET_PLAYING', payload: !playing});
    setPlaying(!playing);
  }

  console.log("Menu open:" + menuOpen);

  return (
    <header>
      <div className={`bg-cream text-gray border-b-2`} ref={header}>
        <div className="hidden md:flex">
          <DesktopNavbar/>
        </div>
        <div className="flex md:hidden">
          <MobileNavbar setMenuOpenNav={setMenuOpen}/>
        </div>
      </div>
    </header>
  )
}

export default Navbar