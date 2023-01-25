import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieList}) => {
    return (
        
        <div className='movieList' style={{display : 'grid', gridTemplateColumns : 'auto auto auto', gap : '50px', marginLeft : '150px', justifyContent : 'center'}}>
            {movieList.map(movie =>
                 <MovieCard movieCard={movie} key={movie.id} />)}
        </div>
    )
}
export default MovieList;