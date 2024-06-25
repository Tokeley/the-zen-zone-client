import React from 'react'
import { TrashIcon, ShareIcon } from './Icons';
import { useMixContext  } from '../hooks/useMixContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const MixRow = ({mix, deleteMixDialog, shareMixDialog}) => {
  const date = new Date(mix.createdAt);
  const readableDate = date.toLocaleString("en-US");
  const { initMix } = useMixContext()
  const { user } = useAuthContext()
  const navigate = useNavigate(); 

  const handleLoad = () => {
      initMix(mix.mix)
      navigate('/');
  }

  const handleDelete = async () => {
    deleteMixDialog(mix)
  }

  const handleShare = async () => {
    const mixId = mix._id
    console.log(mixId)
    // Encode to base64
    const base64Encoded = btoa(mixId);

    // Create a URL with the encoded data as a parameter
    const shareableLink = `http://localhost:3000/share/${base64Encoded}`; // TODO: change to actual website name
    console.log(shareableLink)
    console.log(shareableLink)
    shareMixDialog(shareableLink, mix.title)
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
            <div className="flex items-center" onClick={handleShare}>
              <ShareIcon size={30} strokewidth={1}/>
            </div>
        </div>
        <div className="mt-3 col-span-3 border-b w-full"></div>
    </div>
  )
}

export default MixRow