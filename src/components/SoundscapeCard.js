import React from 'react'
import { EmptyFavIcon, FullFavIcon, AddIcon, Tick } from './Icons';
import {useMixContext} from "../hooks/useMixContext"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import { useFavouritesContext } from '../hooks/useFavouritesContext';
import { useState, useEffect } from 'react';

const SoundscapeCard = ({soundscape}) => {
  const navigate = useNavigate()
  const imageUrl= require(`../images/${soundscape.imagePath}`);
  const { mix, addSoundscape } = useMixContext();
  const { user } = useAuthContext();
  const [inUse, setInuse] = useState(false);
  const [favourited, setFavourited] = useState(false)
  const { favourites, addFavourite, removeFavourite } = useFavouritesContext()

  useEffect(() => {
    setInuse(mix.some(item => item.soundscape._id == soundscape._id))
    setFavourited(favourites.some(item => item._id == soundscape._id))
  },[favourites]);

  // Adds sounscape to user favourites field in database
  const addSoundScapeToFavourites = async () => {
    if (!user){
      navigate("/login")
    }
    setFavourited(true)
    await addFavourite(user.id, soundscape._id)
  }

  // Removes sounscape from user favourites field in database
  const removeSoundScapeFromFavourites = async () => {
    if (!user){
      navigate("/login")
    }
    setFavourited(false)
    await removeFavourite(user.id, soundscape._id)
  }

  const handleAdd = () => {
    if (inUse){ return; }
    setInuse(true);
    addSoundscape(soundscape, 0.5, false)
  }

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="m-8 p-3 border-2 bg-cream flex-col brightness-100 transition-all duration-300 shadow-[5px_5px_rgba(66,_66,_66,_0.4),_10px_10px_rgba(66,_66,_66,_0.3),_15px_15px_rgba(66,_66,_66,_0.2),_20px_20px_rgba(66,_66,_66,_0.1),_25px_25px_rgba(66,_66,_66,_0.05)]">
      <div className="w-64 h-48 border-2" style={backgroundStyle}> </div>
      <div className="flex justify-between items-center mt-3">
        <span className="font-titleFont text-3xl m-0 p-0">{soundscape.title}</span>
        <div className="flex items-center">
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
          
          <div onClick={handleAdd}>
            { inUse ? <Tick size={40}/> : <AddIcon size={40}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoundscapeCard