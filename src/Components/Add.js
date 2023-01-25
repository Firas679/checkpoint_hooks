import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const Add = (AddMovie) => {
  const [show, setShow] = useState(false);
  const [newMovie,setNewMovie] = useState({
    id : uuidv4 (),
    title : '',
    description : '',
    URL : '',
    rating : 0
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handhleChange = (e) =>{
    setNewMovie({...newMovie,[e.target.name] : e.target.value})
  }
  const HandleSave=() => {
    AddMovie(newMovie)
    handleClose()
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange ={handhleChange} name='title' type="text" placeholder="Enter Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange ={handhleChange} name='description' type="text" placeholder="Enter Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Poster</Form.Label>
              <Form.Control onChange ={handhleChange} name='URL' type="text" placeholder="Enter Movie Poster URL" />
            </Form.Group>
            <Rating  name="simple-controlled" value={newMovie.rating} max={10}   onChange={(e, newValue) => {
                setNewMovie({...newMovie,rating: newValue}) }} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={HandleSave}>
            Save Movie
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
