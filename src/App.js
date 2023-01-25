import React, {useState} from 'react';
import './App.css'
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import {data} from './Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';



function App() {
const [dataMovie,setDataMovie] = useState(data) 
const AddMovie = (newMovie) => {
  setDataMovie([...dataMovie,newMovie])
} 

  return (

        <div className='movie_app'>
          <Add AddMovie={dataMovie}/>
          <MovieCard dataMovie={dataMovie} />   
        </div>
  );
}

export default App