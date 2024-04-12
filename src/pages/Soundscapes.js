import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useGetSoundscapes } from '../hooks/useGetSoundscapes';

const Soundscapes = () => {
  const [soundscapes, setSoundscapes] = useState([]);
  const { getSoundscapes, isLoading, error } = useGetSoundscapes();
  
  useEffect(() => {
    const fetchSoundscapes = async () => {
      try {
        const response = await getSoundscapes();
        setSoundscapes(response); // Update state with the fetched soundscapes
      } catch (error) {
        console.error('Error fetching soundscapes:', error);
      }
    };

    fetchSoundscapes();
  }, []);

  return (
    <>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="flex flex-wrap justify-center mx">
            {soundscapes && soundscapes.map((soundscape) => (
              <SoundscapeCard key={soundscape._id} soundscape={soundscape} />
            ))}
          </div>
        )}
        {error && <div className="text-red-500 mt-2">{error}</div>}
    </>
  );
};

export default Soundscapes;
