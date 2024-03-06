import React from 'react'
import { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useFavouritesContext } from '../hooks/useFavouritesContext';
import { useAuthContext } from '../hooks/useAuthContext';

const removeDuplicates = (firstArray, secondArray) => {
  return firstArray.filter(sound => !secondArray.some(({ _id }) => _id === sound._id));
}

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthContext();

  const { favourites: currentFavourites } = useFavouritesContext();

  
  useEffect(() => {
    console.log("TEST");
    const fetchFavourites = async () => {
      const userId = user.id;
      console.log(user.id)
      try {
        
        
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    };
    fetchFavourites();
  }, []); 

  console.log("Current favs:" + JSON.stringify(favourites));

  return (
    <>
      <span>Your Favs</span>
      <div className=" flex flex-wrap justify-center">
        {favourites && favourites.map((favourite) => (
          <SoundscapeCard key={favourite._id} soundscape={favourite} />
        ))}
      </div>
    </>
  );
}

export default Favourites