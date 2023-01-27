import React, {useState} from 'react';
import './App.css'
import MovieCard from './Components/MovieCard';
import Filtre from './Components/Filtre';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';


function AppChild({ dataMovie ,setDataMovie}) {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  const AddMovie = (newMovie) => {
    setDataMovie([...dataMovie, newMovie]);
  };
  return (
    <div className="movie_app">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Add AddMovie={AddMovie} />
        <Filtre setSearch={setSearch} setRate={setRate} rate={rate} />
      </div>
      <MovieCard
        dataMovie={dataMovie.filter((movie) => movie.title.trim().toLowerCase().includes(search) && movie.rating >= rate)}/>
    </div>
  );
}
export default AppChild;
