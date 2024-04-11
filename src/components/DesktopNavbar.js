import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon, Burger } from './Icons';
import { useMixContext } from '../hooks/useMixContext';

const Desktopnavbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { dispatch} = useNavbarHeightContext();
    const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
    const [playing, setPlaying] = useState(false);
    const { saveMix } = useMixContext
  
    const handleLogout = () => {
      logout()
    }

    const handleSaveMix = () => {
      saveMix()
    }
  
    const handlePlayButtonClick = () => {
      soundDispatch({type: 'SET_PLAYING', payload: !playing});
      setPlaying(!playing);
    }

  return (
    <div className="py-3 px-8 flex w-full">
        <div class="items-center justify-normal flex w-full">
          <ul class="flex">
              <div class="group">
                <div className="flex items-center">
                  <SparkleIcon size={25}/>
                  <a href="soundscapes" class="block py-2 px-3 text-lg">Soundscapes</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>

              <div class="group">
                <div className="flex items-center">
                  <EmptyFavIcon size={25} strokewidth={1.5}/>
                  <a href="favourites" class="block py-2 px-3 text-lg">Favourites</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>

              <div class="group">
                <div className="flex items-center">
                  <QuestionIcon size={25}/>
                  <a href="about" class="block py-2 px-3 text-lg">About</a>
                </div>
                <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
              </div>
              

          </ul>
        </div>

        <div className="flex items-center justify-center w-full">
          <div>
            <Link to="/">
              <span className="font-titleFont text-5xl pl-3">TheZenZone</span>
            </Link>
          </div>
          <div className="ml-2 hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={handlePlayButtonClick}>
            {
              playing ? <PauseIcon size={50}/> : <PlayIcon size={50}/>
            }
          </div>
          <div className="w-10 h-10md:hidden">
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
      {user && (
          <div className="flex items-center"> 
            <div className="mr-3">
              <span>{user.email}</span>
            </div>
            <button onClick={handleLogout} className="btn mr-3" >
              Log-out
            </button>
            <button onClick={handleSaveMix} className="btn">
              Save Mix
            </button>
          </div>
        )}
        {!user && (
          <div className="flex">
            <div className="mr-1">
              <a href="login" className="btn">
                  Log-in
              </a>
          </div>
          <div className="ml-1">
              <a href="signup" className="btn">
                  Sign-up
              </a>
          </div>
          </div>
        )}
      </div>
    </div>
    
  )
}

export default Desktopnavbar