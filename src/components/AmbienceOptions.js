import React from 'react';
import { useEffect, useState } from 'react';
import { useSoundContext } from '../hooks/useSoundContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { PlayIcon, PauseIcon, TrashIcon, EmptyFavIcon } from './Icons';


const AmbienceOptions = ({ play, pause, removeAmbience}) => {
    const [ thisPlating, setThisPlaying ] = useState(true);
    const { playing } = useSoundContext();
    const { user } = useAuthContext();

    useEffect(() => {
        if (playing) {
            thisPlating ? play() : pause();
        } else {
            pause();
        }
    },[thisPlating, playing]);

    const iconSize = 8;
  return (
    <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 ">
            <EmptyFavIcon size={iconSize}/>
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => setThisPlaying(!thisPlating)}>
         {thisPlating ? <PauseIcon size={iconSize}/> : <PlayIcon size={iconSize}/>}
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={removeAmbience}>
            <TrashIcon size={iconSize}/>
        </div>
    </div>
  );
};

export default AmbienceOptions;

