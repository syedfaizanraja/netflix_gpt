import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className=' w-48 pr-4 '>
      <img alt='Movie Card'
      className='rounded-lg'
      src = {IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;
