import React from 'react';
import {Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieCard({movieCard}) {    
    return (

    <div> 
      <Card>
        <Card.Img src={movieCard.link} alt='movie_card'/>
        <Card.Body>
           <Card.Title> {movieCard.title} </Card.Title>
           <Button> Start WAtching!! </Button>
        </Card.Body>
      </Card>
    </div>  

    )
}
export default MovieCard