import React from 'react'
import { useFavouritesContext } from '../hooks/useFavouritesContext';

const About = () => {
  return (
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
      <h1 className="text-4xl font-heading font-light text-center pb-2 text-gray">About</h1>
      <div className="border-b border-w-full mx-7 border-gray"></div>
      <div className="mx-32">

        <p className="mt-7">
        “There is no such thing as an empty space or an empty time. There is always something to see, something to hear. In fact, try as we may to make a silence, we cannot.” ― John Cage
        </p>
        <p className="mt-7">
          The Zen Zone is a soundscape generator and mixer designed to help you study, work, relax or tune out the unpleasant sounds surrounding you. 
        </p>
        <p className="mt-7">
          Sometimes, life can be distracting and overwhelming. I have found that for me, a remedy to this is listening to ambient sounds. It helps me focus and takes me to another place or setting in a way that no other medium can.
        </p>
        <p className="mt-7">
          I noticed that a lot of my friends also shared this remedy of using ambient sounds to help them focus, zone in or even sleep. I then made The Zen Zone, a more accessible and powerful way to enjoy high quality ambient recordings for everyone. 
        </p>
        <p className="mt-7">
          Some soundscapes are very pleasant and can calm the mind such as the sound of a crackling fire or rain on a roof. However, other types of soundscapes can be distracting, irritating, or even stressful—such as the blaring of car horns in heavy traffic, the loud chatter from a crowded cafe, or the constant barking of a neighbour’s dog. The Zen Zone is designed to help you ignore bothersome noise by playing custom ambient sounds to suit your environment.
        </p>
        <p className="mt-7">
          I have been recording soundscapes since 2018 when I bought a Zoom H4N handy recorder before a family trip to America where a recorded many soundscapes such as “Mexico Market.” I feel in love with how an ambient recording can transport you to a place even more than a photo can. Something about an ambient recording  just perfectly captures the energy of a place in a way no other medium can.  Ever since then I have been recording soundscapes around New Zealand and up until 2024 had no real use for them so they collected dust in my hard drive. This, of course, changed when I had the idea to create The Zen Zone. When I came up with idea, I was really excited as it perfectly combined my passions for developing and recording while also giving a home to my recordings.
        </p>
        <p className="mt-7">
          I hope you enjoy the soundscapes as much as I do and that they can transport you to another world of focus and peace. 
        </p>
      </div>
    </div>
    
  )
}

export default About