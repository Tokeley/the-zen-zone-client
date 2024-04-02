import React from 'react';
import { useEffect, useState } from 'react';
import { useSoundContext } from '../hooks/useSoundContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { SoundOn, SoundOff, Xmark, EmptyFavIcon, FullFavIcon } from './Icons';
import { useNavigate } from "react-router-dom";
import { useFavouritesContext } from '../hooks/useFavouritesContext';


const SoundscapeOptions = ({ soundscape, play, pause, removeSoundscape}) => {
    const [ thisPlaying, setThisPlaying ] = useState(true);
    const { playing, dispatch } = useSoundContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [favourited, setFavourited] = useState(false)
    const { favourites, addFavourite, removeFavourite } = useFavouritesContext()

    useEffect(() => {
        console.log(JSON.stringify(soundscape))

        setFavourited(favourites.some(item => item._id == soundscape._id))
      },[favourites]);
    
      // Adds sounscape to user favourites field in database
      const addSoundScapeToFavourites = async () => {
        setFavourited(true)
        await addFavourite(user.id, soundscape._id)
      }
    
      // Removes sounscape from user favourites field in database
      const removeSoundScapeFromFavourites = async () => {
        setFavourited(false)
        await removeFavourite(user.id, soundscape._id)
      }
    

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
            {favourited 
            ? (
                <div onClick={removeSoundScapeFromFavourites}>
                <FullFavIcon size={40} strokewidth={1}/>
                </div>
            ) 
            : (
                <div onClick={addSoundScapeToFavourites}>
                <EmptyFavIcon size={40} strokewidth={1}/>
                </div>
            )}
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

