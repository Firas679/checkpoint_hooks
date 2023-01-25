import React from 'react';
import {Form} from 'react-bootstrap';

const Filter= ({title, rate}) => {
    return (

        <div>  
          <Form.Group>
            <Form.Control onChange={(e)=> title(e.target.value)} />  
          </Form.Group>
            <Form.Control onClick={(value)=> rate(value)}/>
        </div>
        
    )
}

export default Filter