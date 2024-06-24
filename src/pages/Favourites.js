import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFavouritesContext } from '../hooks/useFavouritesContext';

const Favourites = () => {
  //const { user } = useAuthContext();
  //const [favourites, setFavourites] = useState([]);
  //const { getUserFavourites, isLoading, error, response } = useAPI();
  const { favourites, isLoading, error } = useFavouritesContext()



  useEffect(() => {
    console.log(JSON.stringify(favourites))
  }, [favourites])
  
  return (
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
        <h1 className="text-4xl font-heading font-light text-center pb-2">Favourites</h1>
        <div className="border-b border-w-full mx-7"></div>
        { isLoading ? 
          <div class="w-full flex justify-center items-center">
            <h2>Loading...</h2>
          </div>
        :
          <div className="flex flex-wrap justify-center">
              {favourites &&
                  favourites.map((favourite) => (
                      <SoundscapeCard key={favourite._id} soundscape={favourite} />
                  ))}
          </div>
        }
        {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>

  );
};

export default Favourites;
