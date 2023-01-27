import { Rating } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const MoreInfo = ({movie}) => {
    const navigate = useNavigate()
    const {movieID} = useParams()
    const foundMovie = movie.find(movie=> movie.id == movieID)
  return (
    <div>
        <h3>{foundMovie.title}</h3>
        <h4>{foundMovie.description}</h4>
        <iframe src={foundMovie.trailer}></iframe>
        <img style={{width : "20rem"}} src={foundMovie.URL} alt='poster'/>
        <Rating name="read-only" value={foundMovie.rating} readOnly max={10} />
        <Button onClick={()=>navigate('/')} variant='primary'>Back To Home Screen</Button>

    </div>
  )
}

export default MoreInfo