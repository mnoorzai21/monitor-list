import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Container } from "react-bootstrap";
import AddWatchlist from "../components/AddWatchlist";
import { searchTitle } from "../util/IMDBapi";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const data = await searchTitle(searchValue);
    setMovies(data.results);
  };

  const addToWatchlist = (movie) => {
    const NewWatchlist = [...watchlist, movie];
    setWatchlist(NewWatchlist);
  };

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </form>
      <div className="row" class="img-thumbnail">
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
