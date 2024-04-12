import React from 'react'
import { useUserMixesContext } from '../hooks/useUserMixesContext'

const Mixes = () => {
  const { mixes } = useUserMixesContext()
  return (
    <>
      <div>Mixes</div>
    {mixes && 
      mixes.map(mix => (
        <div className="flex justify-center">
          <div className=''>
            <p>{mix.title}</p>
            <p>{mix.createdAt}</p>
          </div>
        </div>
        
      ))}
    </>
  )
}

export default Mixes