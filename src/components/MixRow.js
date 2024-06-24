import React from 'react'
import { TrashIcon, ShareIcon } from './Icons';
import { useMixContext  } from '../hooks/useMixContext';
import { useAuthContext } from '../hooks/useAuthContext';

const MixRow = ({mix, deleteMixDialog}) => {
  const date = new Date(mix.createdAt);
  const readableDate = date.toLocaleString("en-US");
  const { initMix } = useMixContext()
  const { user } = useAuthContext()

  const handleLoad = () => {
      console.log("Load mix:" + JSON.stringify(mix.mix))
      initMix(mix.mix)
  }

  const handleDelete = async () => {
    deleteMixDialog(mix)
  }

  return ( 
    <div className="mt-3 grid grid-cols-2 md:grid-cols-3">
        <div className='flex items-center pl-4 overflow-hidden '>
            <p className='text-md sm:text-xl font-heading font-light'>{mix.title}</p>
        </div>
        <div className='hidden md:flex items-center justify-center'>
            <p className='text-xl font-heading font-light'>{readableDate}</p>
        </div>
        <div className='flex justify-end pr-4 '>
            <div className='flex items-center ' onClick={handleLoad}>
                <button className="flex items-center custom-btn mr-2 h-8">Load</button>
            </div>
            <div className="flex items-center" onClick={handleDelete}>
              <TrashIcon size={30} strokewidth={1}/>
            </div>
            <div className="flex items-center" onClick={()=> {console.log("Share")}}>
              <ShareIcon size={30} strokewidth={1}/>
            </div>
        </div>
        <div className="mt-3 col-span-3 border-b w-full"></div>
    </div>
  )
}

export default MixRow