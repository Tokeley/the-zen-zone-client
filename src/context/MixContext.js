
import { createContext, useReducer, useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useAddMix } from  '../hooks/useAddMix'

export const MixContext = createContext()

export const MixContextProvider = ({ children }) => {
  const [mix, setMix] = useState([]);
  const { user } = useAuthContext();
  
  const addSoundscape = (soundscape, vol, isMuted) => {
    if (vol > 1 || vol < 0) {
      console.error('Error: vol must be 0-1');
    }
    const soundscapeUnit = {
      soundscape: soundscape,
      volume: vol,
      isMuted: isMuted
    }
    setMix([...mix, soundscapeUnit])
    localStorage.setItem("Mix", JSON.stringify([...mix, soundscapeUnit]))
  };

  const removeSoundscape = (soundscapeId) => {
    const updatedMix = mix.filter(soundscapeUnit => soundscapeUnit.soundscape._id !== soundscapeId);
    setMix(updatedMix);
    localStorage.setItem("Mix", JSON.stringify(updatedMix))
  };

  // Update volume of a soundscape unit
  const changeVolume = (soundscapeId, vol) => {
    const index = mix.findIndex(soundscapeUnit => soundscapeUnit.soundscape._id === soundscapeId);
  
    if (index !== -1) {
      
      const updatedSoundscapeUnit = { ...mix[index] };
     
      updatedSoundscapeUnit.volume = vol;
   
      const updatedMix = [...mix];
      
      updatedMix[index] = updatedSoundscapeUnit;
      
      setMix(updatedMix);
      localStorage.setItem("Mix", JSON.stringify(updatedMix))
    } else {
      console.log("Error: soundscape not in mix")
    }
  }

   // Update mute of a soundscape unit
   const changeIsMuted = (soundscapeId, mute) => {
    const index = mix.findIndex(soundscapeUnit => soundscapeUnit.soundscape._id === soundscapeId);
  
    if (index !== -1) {
      
      const updatedSoundscapeUnit = { ...mix[index] };
     
      updatedSoundscapeUnit.isMuted = mute;
   
      const updatedMix = [...mix];
      
      updatedMix[index] = updatedSoundscapeUnit;
      
      setMix(updatedMix);
      localStorage.setItem("Mix", JSON.stringify(updatedMix))
    } else {
      console.log("Error: soundscape not in mix")
    }
  }

  // Function to clear mix when user logs out
  const clearMix = () => {
    setMix([]);
    localStorage.setItem("Mix", [])
  };

  // Sets the mix 
  const initMix = (newMix) => {
    setMix(newMix)
    localStorage.setItem("Mix", JSON.stringify(newMix))
  }


  useEffect(() => {
    if (localStorage.getItem("Mix")){
      const mix = JSON.parse(localStorage.getItem("Mix"))
      setMix(mix);
    }
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <MixContext.Provider value={{
      mix,
      addSoundscape,
      removeSoundscape,
      changeVolume,
      changeIsMuted,
      clearMix,
      initMix
    }}>
      { children }
    </MixContext.Provider>
  )

}