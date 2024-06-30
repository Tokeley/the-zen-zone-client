import React from 'react'
import { useFavouritesContext } from '../hooks/useFavouritesContext';

const About = () => {
  return (
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
      <h1 className="text-4xl font-heading font-light text-center pb-2 text-gray">About</h1>
      <div className="border-b border-w-full mx-7 border-gray"></div>
    </div>
    
  )
}

export default About