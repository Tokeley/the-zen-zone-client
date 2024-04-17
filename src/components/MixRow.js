import React from 'react'
import { TrashIcon, ShareIcon } from './Icons';

const MixRow = ({mix}) => {
const date = new Date(mix.createdAt);
const readableDate = date.toLocaleString("en-US");
  return ( 
    <div className="mt-3 grid grid-cols-2 md:grid-cols-3">
        <div className='flex items-center pl-4 overflow-hidden '>
            <p className='text-md sm:text-xl font-headingFont font-thin'>{mix.title}</p>
        </div>
        <div className='hidden md:flex items-center justify-center'>
            <p className='text-xl font-headingFont font-thin'>{readableDate}</p>
        </div>
        <div className='flex justify-end pr-4 '>
            <div className='flex items-center '>
                <button className="flex items-center custom-btn mr-2 h-8">Load</button>
            </div>
            <div className="flex items-center" onClick={()=> {console.log("Delete")}}>
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