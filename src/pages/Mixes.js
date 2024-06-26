import React from 'react'
import { useUserMixesContext } from '../hooks/useUserMixesContext'
import MixRow from '../components/MixRow'
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Mixes = ({deleteMixDialog, shareMixDialog, saveMixDialog}) => {
  const { mixes, isLoading, error } = useUserMixesContext()
  const navigate = useNavigate(); 
  const handleSaveMix = () => {
    saveMixDialog();
    navigate('/');
};


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
          {mixes.length > 0 ?
            mixes.map(mix => (
              <MixRow mix={mix} deleteMixDialog={deleteMixDialog} shareMixDialog={shareMixDialog}/>
            ))
            :
            <>
              <h1 className="mt-24 text-3xl font-heading font-light text-center pb-2">No Mixes</h1>
              <div className="w-full flex justify-center" >
                <button onClick={handleSaveMix}  className="custom-btn items-center">Save Mix</button>
              </div>
            </>
          }
        </div>
      }
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  )
}

export default Mixes