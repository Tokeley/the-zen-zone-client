import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import useSound from 'use-sound';
import birds from '../ambiences/birds.mp3';
import river from '../ambiences/river.mp3';

const Favourites = () => {
  const { user } = useAuthContext()
  console.log(user ? "user" : "no user");
  console.log("TEST");
  return (
    <>
      <span className="text-6xl">FAVOURITES</span>
      <div>
        <SoundPlayer src={birds} />
        <SoundPlayer src={river} />
      </div>
    </>
    
  )
}

function SoundPlayer({ src }) {
  const [play] = useSound(src);
  
  return (
    <button onClick={play}>
      Play Sound
    </button>
  );
}

export default Favourites