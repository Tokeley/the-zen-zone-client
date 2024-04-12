import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon, Burger, Xmark, MixIcon } from './Icons';
import { useMixContext } from '../hooks/useMixContext';

const MobileNavbar = ({saveMixDialog}) => {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { dispatch} = useNavbarHeightContext();
    const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
    const [playing, setPlaying] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { saveMix } = useMixContext

    const handleLogout = () => {
        logout()
    }

    const handleSaveMix = () => {
        saveMixDialog()
    }

    const handlePlayButtonClick = () => {
        soundDispatch({type: 'SET_PLAYING', payload: !playing});
        setPlaying(!playing);
    }

    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={`flex-col w-full ${menuOpen ? 'navbar is-open' : 'navbar'}`}>
            <div className="flex justify-between w-full p-2">
                <div className="w-2/12 flex justify-center items-center">
                    <div onClick={handleMenuButtonClick}>
                        { 
                            menuOpen ? <Xmark size={50}/> : <Burger size={50} />
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
                    playing ? <PauseIcon size={50}/> : <PlayIcon size={50}/>
                    }
                </div>
                </div>
            </div>
            
            {
                menuOpen &&
                <div className="flex justify-center items-center">
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
                            <MixIcon size={25} strokewidth={1.5}/>
                            <a href="mixes" class="block py-2 px-3 text-lg">Mixes</a>
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
                        <div className="mb-4"></div>
                        {user && (
                            <div className="flex-col items-center justify-center border-2 p-2 mb-2"> 
                                <div className="flex justify-center mb-2">
                                <span>{user.email}</span>
                                </div>
                                <div className="flex-col items-center">
                                    <button onClick={handleSaveMix} className="custom-btn mr-1">
                                        Save Mix
                                    </button>
                                    <button onClick={handleLogout} className="custom-btn ml-1">
                                        Log-out
                                    </button>
                                </div>
                            </div>
                        )}
                        {!user && (
                            <div className="flex mb-4 justify-center'">
                                <div className="mr-1">
                                    <a href="login" className="custom-btn">
                                        Log-in
                                    </a>
                                </div>
                                <div className="ml-1">
                                    <a href="signup" className="custom-btn">
                                        Sign-up
                                    </a>
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>
            }
            
        </div>
    )
}

export default MobileNavbar