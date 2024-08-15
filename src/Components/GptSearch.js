import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { Bg_Img } from '../Utils/constants';

const GptSearch = () => {
  return (
    <div>
         <div className=" absolute -z-10">
        <img className=" fixed" src={Bg_Img} alt="Bg-Logo"></img>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
