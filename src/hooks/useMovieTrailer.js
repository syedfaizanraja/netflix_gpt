import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = ({movieId}) => {

    const dispatch = useDispatch();

    const trailer = useSelector( store => store.movies.trailerVideo);

    //Fetch trailer Video and updating the store with trailer Video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1022789/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);

};

export default useMovieTrailer;