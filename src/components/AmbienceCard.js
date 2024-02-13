import React from 'react'
import { EmptyFavIcon, FullFavIcon, AddIcon } from './Icons';
import {useAmbiencesContext} from "../hooks/useAmbiencesContext"

const AmbienceCard = ({ambience}) => {
  const imageUrl= require(`../images/${ambience.imagePath}`);
  const {ambiences, dispatch} = useAmbiencesContext();

  const handleAdd = () => {
    console.log("ADD");
    dispatch({type: 'ADD_SOUND', payload: ambience})
  }

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="m-8 p-3 border-2 bg-cream flex-col brightness-100 transition-all duration-300 ">
      <div className="w-64 h-48 border-2" style={backgroundStyle}> </div>
      <div className="flex justify-between items-center mt-3">
        <span className="font-titleFont text-3xl m-0 p-0">{ambience.title}</span>
        <div className="flex items-center">
          <div>
            <EmptyFavIcon size={8}/>
          </div>
          <div onClick={handleAdd}>
            <AddIcon size={8}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmbienceCard