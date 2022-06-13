import React, { useEffect, useState} from "react"
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {} from "react-bootstrap";
import AddWatchlist from "../components/AddWatchlist"

const ProtectedPageExample = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () =>{
    const url =`https://imdb-api.com/en/API/SearchTitle/k_2zgimyw8/${searchValue}`
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);

  return (
    <div className='container-fluid'>
    <div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row'>
      <MovieList
					movies={movies}
			/>
    </div>
    <div className='row'>
				<MovieList
					movies={movies} AddWatchlistComponent={AddWatchlist}
				/>
			</div>
    </div>
  );
};

export default ProtectedPageExample