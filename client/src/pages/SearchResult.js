import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Container } from "react-bootstrap";
import AddWatchlist from "../components/AddWatchlist";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `https://imdb-api.com/en/API/SearchTitle/k_2zgimyw8/${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addToWatchlist = (movie) => {
    const NewWatchlist = [...watchlist, movie];
    setWatchlist(NewWatchlist);
  };

  return (
    <Container>
      <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row" class="img-thumbnail" >
        <MovieList
          movies={movies}
          handleWatchlistClick={addToWatchlist}
          AddWatchlistComponent={AddWatchlist}
        />
      </div>
      <div className="row" class="img-thumbnail">
        <MovieList
          movies={movies}
          handleWatchlistClick={addToWatchlist}
          AddWatchlistComponent={AddWatchlist}
        />
      </div>
    </Container>
  );
};

export default SearchResult;
