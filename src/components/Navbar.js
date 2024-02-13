import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon } from './Icons';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { dispatch} = useNavbarHeightContext();
  const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
  const [playing, setPlaying] = useState(false);
  let header = useRef(null);

  useEffect(() => {
    dispatch({type: 'SET_NAVBAR_HEIGHT', payload: header.current.offsetHeight});
    setPlaying(contextPlaying);
  },[]);

  const handleLogout = () => {
    logout()
  }

  const handlePlayBittonClick = () => {
    soundDispatch({type: 'SET_PLAYING', payload: !playing});
    setPlaying(!playing);
  }

  

  return (
    <header>
      <div className="bg-cream text-gray w-full md:flex py-3 px-8 border-b-2 " ref={header}>
        <div class=" hidden items-center justify-normal w-full md:flex">
          <ul class="flex">
              <div class="group">
                <div className="flex items-center">
                  <SparkleIcon size={6}/>
                  <a href="ambiences" class="block py-2 px-3 text-lg">Ambiences</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>

              <div class="group">
                <div className="flex items-center">
                  <EmptyFavIcon size={6}/>
                  <a href="favourites" class="block py-2 px-3 text-lg">Favourites</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>

              <div class="group">
                <div className="flex items-center">
                  <QuestionIcon size={6}/>
                  <a href="about" class="block py-2 px-3 text-lg">About</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>
              

          </ul>
        </div>

        <div className="flex w-full justify-between items-center md:justify-center">
          <div className="md:hidden">
            <svg className="w-14" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </div>
          <div>
            <Link to="/">
              <span className="font-titleFont text-6xl md:pl-3">TheZenZone</span>
            </Link>
          </div>
          <div className="ml-2 hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={handlePlayBittonClick}>
            {
              playing ? <PauseIcon size={10}/> : <PlayIcon size={10}/>
            }
          </div>
          <div className="w-10 h-10md:hidden">
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end w-full">
      {user && (
        <div className="flex items-center"> 
            <div className="mr-3">
              <span>{user.email}</span>
            </div>
            <button onClick={handleLogout} className="btn">
              Log-out
            </button>
          </div>
        )}
        {!user && (
          <div className="flex">
            <a href="login" className="btn">
              Log-in
            </a>
            <a href="signup" className="btn">
              Sign-up
            </a>
          </div>
        )}
      </div>


        </div>
    </header>
  )
}

export default Navbar