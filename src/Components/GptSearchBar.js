import React from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langkey = useSelector(store => store.config.lang);

  return (
    <div className=" pt-[09%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg p-4">
        <input
          type="text"
          className="p-4 m-4 col-span-9  "
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4 hover:opacity-70">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
