import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className=" md:px-6 ">
    <h1 className=" text-2xl mx-5 py-4 md:text-3xl text-white">{title}</h1>
      <div className=" flex overflow-x-scroll px-6 scroll-smooth no-scrollbar ">
        <div className=" flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
