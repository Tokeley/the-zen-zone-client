import React from 'react'
import { EmptyFavIcon, FullFavIcon, AddIcon } from './Icons';
import {useSoundscapesContext} from "../hooks/useSoundscapesContext"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';

const SoundscapeCard = ({soundscape}) => {
  const imageUrl= require(`../images/${soundscape.imagePath}`);
  const {dispatch} = useSoundscapesContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch({type: 'ADD_SOUND', payload: soundscape})
  }

  const handleFavClick = () => {
    if (!user){
        navigate("/login");
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
            <AddIcon size={40}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoundscapeCard