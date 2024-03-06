import React from 'react';
import { useEffect, useState } from 'react';
import { useSoundContext } from '../hooks/useSoundContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { PlayIcon, PauseIcon, TrashIcon, EmptyFavIcon } from './Icons';
import { useNavigate } from "react-router-dom";


const SoundscapeOptions = ({ play, pause, removeSoundscape}) => {
    const [ thisPlating, setThisPlaying ] = useState(true);
    const { playing } = useSoundContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (playing) {
            thisPlating ? play() : pause();
        } else {
            pause();
        }
    },[thisPlating, playing, play, pause]);

    const iconSize = 10;

    const handleFavClick = () => {
        if (!user){
            navigate("/login");
        }
    }
  return (
    <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 "  onClick={handleFavClick}>
            <EmptyFavIcon size={iconSize} strokewidth={1.5}/>
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => setThisPlaying(!thisPlating)}>
         {thisPlating ? <PauseIcon size={iconSize}/> : <PlayIcon size={iconSize}/>}
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={removeSoundscape}>
            <TrashIcon size={iconSize}/>
        </div>
    </div>
  );
};

export default SoundscapeOptions;

