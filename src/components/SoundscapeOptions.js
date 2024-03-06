import React from 'react';
import { useEffect, useState } from 'react';
import { useSoundContext } from '../hooks/useSoundContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { SoundOn, SoundOff, Xmark, EmptyFavIcon } from './Icons';
import { useNavigate } from "react-router-dom";


const SoundscapeOptions = ({ play, pause, removeSoundscape}) => {
    const [ thisPlaying, setThisPlaying ] = useState(true);
    const { playing, dispatch } = useSoundContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (playing) {
            thisPlaying ? play() : pause();
        } else {
            pause();
        }
    },[thisPlaying, playing, play, pause]);

    const iconSize = 40;

    const handleFavClick = () => {
        if (!user){
            navigate("/login");
        }
    }
  return (
    <div className="flex justify-between w-full px-2 md:px-6">
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 "  onClick={handleFavClick}>
            <EmptyFavIcon size={iconSize} strokewidth={1.5}/>
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => setThisPlaying(!thisPlaying)}>
         {thisPlaying ? <SoundOn size={iconSize}/> : <SoundOff size={iconSize}/>}
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={removeSoundscape}>
            <Xmark size={iconSize}/>
        </div>
    </div>
  );
};

export default SoundscapeOptions;

