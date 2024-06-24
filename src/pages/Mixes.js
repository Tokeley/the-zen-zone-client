import React from 'react'
import { useUserMixesContext } from '../hooks/useUserMixesContext'
import MixRow from '../components/MixRow'

const Mixes = ({deleteMixDialog, shareMixDialog}) => {
  const { mixes, isLoading, error } = useUserMixesContext()
  return (
    <div className="flex-col items-center mx-auto max-w-screen-page-width mt-4">
      <h1 className="text-4xl font-heading font-light text-center pb-2">Mixes</h1>
      <div className="border-b border-w-full mx-7"></div>
      {isLoading ? 
        <div class="w-full flex justify-center items-center">
          <h2>Loading...</h2>
        </div>
      :
        <div className=" mx-7">
        {mixes && 
          mixes.map(mix => (
            <MixRow mix={mix} deleteMixDialog={deleteMixDialog} shareMixDialog={shareMixDialog}/>
          ))}
        </div>
      }
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  )
}

export default Mixes