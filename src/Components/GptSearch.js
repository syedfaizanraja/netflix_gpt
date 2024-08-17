import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Bg_Img } from '../Utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className=" fixed -z-10 ">
        <img  className=" h-screen  object-cover md:w-screen"
        src={Bg_Img} alt="Bg-Logo"></img>
     </div>
      <div className="">
          <GptSearchBar/>
          <GptMovieSuggestions/>
      </div>
    </>
  );
};

export default GptSearch;
