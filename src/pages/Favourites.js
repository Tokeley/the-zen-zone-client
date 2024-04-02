import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFavouritesContext } from '../hooks/useFavouritesContext';

const Favourites = () => {
  //const { user } = useAuthContext();
  //const [favourites, setFavourites] = useState([]);
  //const { getUserFavourites, isLoading, error, response } = useAPI();
  const { favourites } = useFavouritesContext()



  useEffect(() => {
    console.log(JSON.stringify(favourites))
  }, [favourites])
  
  return (
    <>
      <span>Your Favs</span>
        <div className="flex flex-wrap justify-center">
          {favourites &&
            favourites.map((favourite) => (
              <SoundscapeCard key={favourite._id} soundscape={favourite} />
            ))}
        </div>
    </>
  );
};

export default Favourites;
