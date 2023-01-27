import { Rating } from '@mui/material';
import React from 'react';
import {Form} from 'react-bootstrap';

const Filtre= ({setSearch,setRate,rate}) => {
    return (

      <div> 
        <Form style={{display : 'flex'}}>
          <Form.Group classname= "mb-3" controlID="formBasicText">
            <Form.Control onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Entrer Title" />  
          </Form.Group>
            <Rating name="simple-controlled" max={10} onChange={(event,newValue)=>setRate(newValue)}/>
        </Form>
      </div>
        
    )
}

export default Filtre