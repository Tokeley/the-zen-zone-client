import React, { useEffect, useState } from 'react';
import SoundscapeCard from '../components/SoundscapeCard';
import { useSoundscapesContext } from "../hooks/useSoundscapesContext";

const removeDuplicates = (firstArray, secondArray) => {
  return firstArray.filter(sound => !secondArray.some(({ _id }) => _id === sound._id));
}

const Soundscapes = () => {
  const [soundscapes, setSoundscapes] = useState([]);

  const { soundscapes: currentSoundscapes } = useSoundscapesContext();
  useEffect(() => {
    const fetchSoundscapes = async () => {
      try {
        const response = await fetch('/api/soundscapes/');
        const soundscapesData = await response.json();
        setSoundscapes(removeDuplicates(soundscapesData, currentSoundscapes));
      } catch (error) {
        console.error('Error fetching soundscapes:', error);
      }
    };
    fetchSoundscapes();
  }, [currentSoundscapes]); 

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
