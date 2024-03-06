import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon, Burger, Xmark } from './Icons';

const MobileNavbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { dispatch} = useNavbarHeightContext();
    const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
    const [playing, setPlaying] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    let header = useRef(null);

    const handleLogout = () => {
    logout()
    }

    const handlePlayButtonClick = () => {
        soundDispatch({type: 'SET_PLAYING', payload: !playing});
        setPlaying(!playing);
    }

    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen)
        console.log("Test")
    }

    return (
        <div className={`w-full ${menuOpen ? 'navbar is-open' : 'navbar'}`}>
            <div className="flex justify-between w-full p-2">
                <div className="w-2/12 flex justify-center items-center">
                    <div onClick={handleMenuButtonClick}>
                        { 
                            menuOpen ? <Xmark size={60}/> : <Burger size={60} />
                        }
                    </div>
                </div>

                <div className="w-8/12  flex justify-center items-center">
                    <Link to="/">
                    <span className="font-titleFont text-4xl sm:text-6xl pl-3">TheZenZone</span>
                    </Link>
                </div>

                <div className="w-2/12  flex justify-center">
                    <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={handlePlayButtonClick}>
                    {
                    playing ? <PauseIcon size={60}/> : <PlayIcon size={60}/>
                    }
                </div>
                </div>
            </div>
            
            {
                menuOpen &&
                <div className={`flex justify-center items-center`}>
                    <div className="flex-col">
                        <div class="group">
                            <div className="flex items-center justify-center">
                            <SparkleIcon size={25}/>
                            <a href="soundscapes" class="block py-2 px-3 text-lg">Soundscapes</a>
                            </div>
                            <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                        </div>

                        <div class="group">
                            <div className="flex items-center justify-center">
                            <EmptyFavIcon size={25} strokewidth={1.5}/>
                            <a href="favourites" class="block py-2 px-3 text-lg">Favourites</a>
                            </div>
                            <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                        </div>

                        <div class="group">
                            <div className="flex items-center justify-center">
                            <QuestionIcon size={25}/>
                            <a href="about" class="block py-2 px-3 text-lg">About</a>
                            </div>
                            <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                        </div>


                    </div>
                </div>
            }
            
        </div>
    )
}

export default MobileNavbar