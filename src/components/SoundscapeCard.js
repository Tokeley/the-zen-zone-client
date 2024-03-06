import React from 'react'
import { EmptyFavIcon, FullFavIcon, AddIcon, Tick } from './Icons';
import {useSoundscapesContext} from "../hooks/useSoundscapesContext"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import { useFavouritesContext } from '../hooks/useFavouritesContext';
import { useState, useEffect } from 'react';



const SoundscapeCard = ({soundscape}) => {
  const imageUrl= require(`../images/${soundscape.imagePath}`);
  const {dispatch: soundScapeDispatch, soundscapes} = useSoundscapesContext();
  const {dispatch: favouritesDispatch} = useFavouritesContext();
  const { user } = useAuthContext();
  const [inUse, setInuse] = useState(false);
  const navigate = useNavigate();
  const soundscapeId = soundscape._id;
  const userId = user.id;

  useEffect(() => {
    if (soundscapes.some(item => item._id == soundscape._id)){
      console.log("true");
      setInuse(true);
    } else {
      setInuse(false);
    }
  },[]);

  // Adds sounscape to user favourites field in database
  const addSoundScapeToFavourites = async () => {
    const response = await fetch('/api/user/addSoundscapeToFavourites' ,{
      method: 'POST',
      body: JSON.stringify({userId, soundscapeId}),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
      }
    })
  
    const json = await response.json()

    if (!response.ok){
      console.log("Error adding SS to favs: " + json.error);
    }
  
    if (response.ok){
      favouritesDispatch({type: 'ADD', payload: json.soundscape})
    }
  }

  const handleAdd = () => {
    if (inUse){ return; }
    setInuse(true);
    soundScapeDispatch({type: 'ADD_SOUND', payload: soundscape})
  }

  const handleFavClick = () => {
    if (!user){
        navigate("/login");
    }
    if (user){
      console.log("Add to favourtes...")
      addSoundScapeToFavourites();
    }
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
          <div onClick={handleFavClick}>
            <EmptyFavIcon size={40} strokewidth={1}/>
          </div>
          <div onClick={handleAdd}>
            { inUse ? <Tick size={40}/> : <AddIcon size={40}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoundscapeCard