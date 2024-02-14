import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useSoundscapesContext } from "../hooks/useSoundscapesContext";

const Soundscapes = () => {
  const [soundscapes, setSoundscapes] = useState([]);

  useEffect(() => {
    const fetchSoundscapes = async () => {
      try {
        const response = await fetch('/api/soundscapes/');
        const soundscapesData = await response.json();
        setSoundscapes(soundscapesData);
      } catch (error) {
        console.error('Error fetching soundscapes:', error);
      }
    };

    fetchSoundscapes();
  }, []); 

  return (
    <>
      <div className=" flex flex-wrap justify-center">
        {soundscapes && soundscapes.map((soundscape) => (
          <SoundscapeCard key={soundscape._id} soundscape={soundscape} />
        ))}
      </div>
    </>
  );
};

export default Soundscapes;
