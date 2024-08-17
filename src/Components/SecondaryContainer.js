import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (movies === null) return ; // Early return 
  return (
    <div className='bg-black'>
       {/* 
            MovieList - popular
                Movie Cards
            MovieList - Now Playing 
            MovieList - Trending
            MovieList - Horror
       
       */}
       <div className=' -mt-19  md:-mt-60 md:pl-10 relative z-20 '>
       <MovieList title= {"Now Playing"} movies = {movies?.nowPlayingMovies}/>
       <MovieList title= {"Trending"} movies = {movies?.nowPlayingMovies}/>
       <MovieList title= {"Popular"} movies = {movies?.popularMovies}/>
       <MovieList title= {"Horror"} movies = {movies?.nowPlayingMovies}/>
       </div>
    </div>
  )
}

export default SecondaryContainer
