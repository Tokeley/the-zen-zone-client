import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'

const PlayIcon = () => {
  return (
    <svg className="w-11" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"></path>
    </svg>
  );
}

const PauseIcon = () => {
  return (
    <svg className="w-11" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
  </svg>
  );
}

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { dispatch} = useNavbarHeightContext()
  const [playing, setPlaying] = useState(false);
  let header = useRef(null);

  useEffect(() => {
    console.log("header: "+header.current.offsetHeight);
    dispatch({type: 'SET_NAVBAR_HEIGHT', payload: header.current.offsetHeight});
  },[]);

  const handleLogout = () => {
    logout()
  }


  return (
    <header>
      <div className="bg-cream text-gray w-full md:flex py-3 px-8 border-b-2 " ref={header}>
        <div class=" hidden items-center justify-normal w-full md:flex">
          <ul class="flex">
              <div class="group">
                <div className="flex">
                  <svg className="w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                  </svg>
                  <a href="ambiences" class="block py-2 px-3 text-lg">Ambiences</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>

              <div class="group">
                <div className="flex">
                  <svg className="w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                  </svg>
                  <a href="favourites" class="block py-2 px-3 text-lg">Favourites</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>

              <div class="group">
                <div className="flex">
                  <svg className="w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path>
                  </svg>
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
          <div className="ml-2 hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={() => {setPlaying(!playing)}}>
            {
              playing ? <PauseIcon/> : <PlayIcon/>
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