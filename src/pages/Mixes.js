import React from 'react'
import { useUserMixesContext } from '../hooks/useUserMixesContext'
import MixRow from '../components/MixRow'

const Mixes = () => {
  const { mixes } = useUserMixesContext()
  return (
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
      <h1 className="text-4xl font-heading font-thin text-center pb-2">Mixes</h1>
      <div className="border-b border-w-full mx-7"></div>
      <div className=" mx-7">
      {mixes && 
        mixes.map(mix => (
          <MixRow mix={mix}/>
        ))}
      </div>
    </div>
  )
}

export default Mixes