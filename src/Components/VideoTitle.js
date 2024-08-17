import React from 'react';
import { FaPlay } from "react-icons/fa";


const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] md:px-24  px-6 absolute text-white  bg-gradient-to-r from-black '>
      <h1 className=' text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className=' py-6 text-lg w-1/4 md:inline-block hidden'>{overview}</p> 
      <div className='flex'>
        <div className=''>
           <button className='flex  bg-white text-black text-lg hover:opacity-60 md:p-3 md:px-10 my-2  px-7 py-1 rounded-lg'>
           <FaPlay className='mt-2 size-3'/> &nbsp; Play</button>
           
        </div>
        <button className=' bg-gray-500  mx-3  text-lg text-white hover:opacity-65 p-3 px-10 rounded-lg md:inline-block hidden '> <span className=' text-xl m-2 text-white'>ⓘ</span>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
