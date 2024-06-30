import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFavouritesContext } from '../hooks/useFavouritesContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Favourites = () => {
  const { favourites, isLoading, error } = useFavouritesContext()
  const navigate = useNavigate(); 



  useEffect(() => {
    console.log(JSON.stringify(favourites))
  }, [favourites])
  
  return (
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
        <h1 className="text-4xl font-heading font-light text-center pb-2 text-gray">Favourites</h1>
        <div className="border-b border-w-full mx-7 border-gray"></div>
        { isLoading ? 
          <div class="w-full flex justify-center items-center">
            <h2>Loading...</h2>
          </div>
        :
          <div className="flex flex-wrap justify-center">
              {favourites.length > 0 ?
                  favourites.map((favourite) => (
                      <SoundscapeCard key={favourite._id} soundscape={favourite} />
                  ))
                
                :
                <>
                  <h1 className="mt-24 text-3xl font-heading font-light text-center pb-2">No Favourites</h1>
                  <div className="w-full flex justify-center" >
                    <button onClick={() => navigate('/soundscapes')}  className="custom-btn items-center">Browse Soundscapes</button>
                  </div>
                </>
              }
          </div>
        }
        {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>

  );
};

export default Favourites;
