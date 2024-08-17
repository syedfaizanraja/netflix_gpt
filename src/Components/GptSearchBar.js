import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch();
  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an API call to Open AI get movie results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Bahubali, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // handle the  error  here
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); // returns a array of movies

    //for each  movie I will search TMDM API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // A array of promises
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames : gptMovies,movieResults : tmdbResults}));
    //console.log(tmdbResults);
  };

  return (
    <div className="pt-[45%] md:pt-[09%] flex justify-center ">
      <form
        className=" w-half md:w-1/2 m-2 p-1 bg-black grid grid-cols-12 rounded-lg md:p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" py-2 px-3 m-2 md:p-4 md:m-4 col-span-9 rounded-lg"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className=" py-2 px-3 m-2 md:py-2 md:px-4 bg-red-500 text-white rounded-lg col-span-3 md:m-4  hover:opacity-70"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
