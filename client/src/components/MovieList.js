import { Button } from 'react-bootstrap';
import React from 'react';

const MovieList = (props) => {
    const AddWatchlistComponent = props.AddWatchlistComponent 
    return (
        <>
            {props.movies.map((movie, index) => (
                <div>
                    <img src={movie.image} alt='movie' class="img-thumbnail"></img>
                    <Button
                     onClick={() => props.handleWatchlistClick(movie)}
                     >
                         <AddWatchlistComponent /> 
                    </Button>
                </div>
            ))}
        </>
    );
};
export default MovieList;