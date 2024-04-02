import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useSoundscapesContext } from "../hooks/useSoundscapesContext";
import { useAPI } from '../hooks/useAPI';

const Soundscapes = () => {
  const [soundscapes, setSoundscapes] = useState([]);
  const { getAllSoundScapes, isLoading, error, response } = useAPI();
  
  useEffect(() => {
    getAllSoundScapes();
  }, []);

  useEffect(() => {
    if (!isLoading && response) {
      setSoundscapes(response);
    }
  }, [isLoading, response]);

  return (
    <>
      {error ? <p>error</p> : null}
      
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className=" flex flex-wrap justify-center">
            {soundscapes && soundscapes.map((soundscape) => (
              <SoundscapeCard key={soundscape._id} soundscape={soundscape} />
            ))}
          </div>
        )}
    </>
  );
};

export default Soundscapes;
