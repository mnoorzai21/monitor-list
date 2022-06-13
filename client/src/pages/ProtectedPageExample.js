import React, { useEffect, useState} from "react"
import MovieList from "../components/MovieList";

const ProtectedPageExample = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () =>{
    const url ="https://imdb-api.com/en/API/SearchTitle/k_ws4zcg2h/matrix"
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.results);
  };

    useEffect(() => {
      getMovieRequest();
    }, []);

  return (
    <>
    <div>
      asdf
    </div>
    <div>
        <MovieList movies={movies} />
    </div>
    </>
  );
};

export default ProtectedPageExample