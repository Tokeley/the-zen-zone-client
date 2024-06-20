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
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
        <h1 className="text-4xl font-heading font-light text-center pb-2">Soundscapes</h1>
        <div className="border-b border-w-full mx-7"></div>
        {isLoading ? (
          <div class="w-full flex justify-center items-center">
              <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
          </div>
      
        ) : (
          <div className="flex flex-wrap justify-center mx">
            {soundscapes && soundscapes.map((soundscape) => (
              <SoundscapeCard key={soundscape._id} soundscape={soundscape} />
            ))}
          </div>
        )}
        {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default Soundscapes;
