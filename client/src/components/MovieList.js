import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => <div>
                <img src={movie.image} alt='movie'></img>
            </div>
            )}
        </>
    );
};
export default MovieList;