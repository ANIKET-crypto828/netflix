import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3 mt-2'>{overview}</p>
      <div className='flex gap-4 mt-8'>
        <button className='gap-2 flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-gray-500'>
          <FaCirclePlay size="24px"/>
          <span className='ml-1'>Play</span>
          </button>
        <button className='gap-2 flex bg-opacity-50 items-center px-6 py-2 bg-white text-black rounded-md hover:bg-gray-500'>
          <FaInfoCircle size="24px"/>
          <span className='ml-1'>Watch more</span>
          </button>
      </div>
    </div>
  )
}

export default VideoTitle