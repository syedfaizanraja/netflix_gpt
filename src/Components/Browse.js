import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();

  

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
        MainContainer 
          - Video background
          - Video title
        secondary container
          - Movie List *n
          - Cards *n 
      
      */}
    </div>
  )
}

export default Browse
