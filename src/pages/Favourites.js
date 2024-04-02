import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useAuthContext } from '../hooks/useAuthContext';
import { useAPI } from '../hooks/useAPI';

const Favourites = () => {
  const { user } = useAuthContext();
  const [favourites, setFavourites] = useState([]);
  const { getUserFavourites, isLoading, error, response } = useAPI();

  useEffect(() => {
    getUserFavourites(user.id);
  }, []);

  useEffect(() => {
    if (!isLoading && response) {
      setFavourites(response);
    }
  }, [isLoading, response]);

  console.log("Fav context:" + JSON.stringify(favourites));

  return (
    <>
      <span>Your Favs</span>
      {error ? <p>error</p> : null}
      {isLoading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {favourites &&
            favourites.map((favourite) => (
              <SoundscapeCard key={favourite._id} soundscape={favourite} />
            ))}
        </div>
      )}
    </>
  );
};

export default Favourites;
