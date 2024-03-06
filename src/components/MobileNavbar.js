import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon, Burger } from './Icons';

const MobileNavbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { dispatch} = useNavbarHeightContext();
    const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
    const [playing, setPlaying] = useState(false);
    let header = useRef(null);

    const handleLogout = () => {
    logout()
    }

    const handlePlayBittonClick = () => {
    soundDispatch({type: 'SET_PLAYING', payload: !playing});
    setPlaying(!playing);
    }
    return (
        <div className="flex justify-between w-full p-2">
            <div className="w-2/12 flex justify-center items-center">
                <Burger size={50}/>
            </div>

            <div className="w-8/12  flex justify-center items-center">
                <Link to="/">
                <span className="font-titleFont text-4xl sm:text-6xl pl-3">TheZenZone</span>
                </Link>
            </div>

            <div className="w-2/12  flex justify-center">
                <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={handlePlayBittonClick}>
                {
                playing ? <PauseIcon size={60}/> : <PlayIcon size={60}/>
                }
            </div>
            </div>
        </div>
    )
}

export default MobileNavbar