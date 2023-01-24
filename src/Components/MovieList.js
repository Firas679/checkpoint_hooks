import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieList}) => {
    return (
        
        <div className='movieList'>
            {movieList.map(movie =>
                 <MovieCard movieCard={movie} />)}
        </div>
    )
}
export default MovieList;