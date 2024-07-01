import React from 'react';
import { useEffect, useState } from 'react';
import { useSoundContext } from '../hooks/useSoundContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { SoundOn, SoundOff, Xmark, EmptyFavIcon, FullFavIcon } from './Icons';
import { useNavigate } from "react-router-dom";
import { useFavouritesContext } from '../hooks/useFavouritesContext';
import { useMixContext } from '../hooks/useMixContext';


const SoundscapeOptions = ({ soundscape, play, pause, removeSoundscape, isMuted, playing: otherPlaying, setPlaying}) => {
    const [ thisPlaying, setThisPlaying ] = useState(!isMuted);
    const { playing, dispatch: soundDispatch } = useSoundContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [favourited, setFavourited] = useState(false)
    const { favourites, addFavourite, removeFavourite } = useFavouritesContext()
    const {changeIsMuted} = useMixContext()

    useEffect(() => {
        setFavourited(favourites.some(item => item._id == soundscape._id))
    },[favourites, user, soundscape]);
    
    // Adds sounscape to user favourites field in database
    const addSoundScapeToFavourites = () => {
        if (!user){
            setPlaying(true)
            navigate("/signup")
        }
        else{
            asyncAddSoundScapeToFavourites()
        }
    }

    const asyncAddSoundScapeToFavourites = async() => {
        setFavourited(true)

        await addFavourite(soundscape._id)
    }
    // Removes sounscape from user favourites field in database
    const removeSoundScapeFromFavourites = async () => {
        if (!user){
            setPlaying(true)
            navigate("/signup")
        }
        setFavourited(false)
        await removeFavourite(soundscape._id)
    }
    
    useEffect(() => {
        if (playing) {
            if (thisPlaying){
                pause()
                play()
            } else {
                pause()
            }
        } else {
            pause()
        }
    },[thisPlaying, playing]);

    const iconSize = 40;


    const handleMuteClick = () => {
        setThisPlaying(!thisPlaying)
        changeIsMuted(soundscape._id, thisPlaying)
    }
  return (
    <div className="flex justify-between w-full px-2 md:px-6">
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 ">
            {favourited 
            ? (
                <div onClick={removeSoundScapeFromFavourites}>
                <FullFavIcon size={40} strokewidth={1.5}/>
                </div>
            ) 
            : (
                <div onClick={addSoundScapeToFavourites}>
                <EmptyFavIcon size={40} strokewidth={1.5}/>
                </div>
            )}
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300" onClick={handleMuteClick}>
         {thisPlaying ? <SoundOn size={iconSize}/> : <SoundOff size={iconSize}/>}
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300 " onClick={removeSoundscape}>
            <Xmark size={iconSize}/>
        </div>
    </div>
  );
};

export default SoundscapeOptions;

