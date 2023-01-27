import React from 'react';
import { Card} from 'react-bootstrap';
import { Rating } from '@mui/material';


function MovieCard({dataMovie}) {    
    return (

    <div style={{display : 'grid', gridTemplateColumns : 'auto auto auto', gap : '50px', margin : '150px', justifyContent : 'center'}}> 
      {dataMovie.map((movie) => (
      <div>
       <Card style={{width : "19rem", height : "300px"}}>
        <Card.Img style={{width : "16rem"}} src={movie.URL} alt='poster'/>
        <Card.Body>
           <Card.Title> {movie.title} </Card.Title>
           <Card.Text> {movie.description} </Card.Text>
           <Rating name="read-only" value={movie.rating} readOnly max={10} />
        </Card.Body>
       </Card>
      </div>
      ))}
    </div>  
    )
}
export default MovieCard