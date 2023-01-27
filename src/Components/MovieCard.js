import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Rating } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';


function MovieCard({dataMovie}) {    
    return (

    <div style={{display : 'grid', gridTemplateColumns : 'auto auto auto', gap : '50px', margin : '70px', justifyContent : 'center'}}> 
      {dataMovie.map((movie) => (
      <div>
       <Card style={{width : "20rem", height : "552px"}}>
        <Card.Img style={{width : "20rem"}} src={movie.URL} alt='poster'/>
        <Card.Body>
           <Card.Title> {movie.title} </Card.Title>
           <Rating name="read-only" value={movie.rating} readOnly max={10} />
           <Button as={Link} to={`/Pages/${movie.id}`} variant='primary'> More Details </Button>
        </Card.Body>
       </Card>
      </div>
      ))}
    </div>  
    )
}
export default MovieCard