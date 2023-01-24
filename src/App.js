import React, {useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';


function App({movieList,setMovieList}) {

const [search, setSearch] = useState('');
const Title =(search)=>{setSearch(search)}
const rating = (rate)=>{setRate(rate)}

  return (

      <header>
        <div className='movieapp'>
          <Filter Title={Title} rating={rating} />
          <MovieList movieList={movieList.filter(el=>el.title(search))}/>     
          </div>
      </header>
  )
}

export default App