import React from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

const SearchCard = (movie) => {
  console.log(movie)

  const addToMyList = (movie) => {
    // console.log(`${movie.Title} is added`)
    console.log(movie)
    axios
      .post('http://localhost:5000/lists', movie)
      .then((res) => console.log(res.data))
  }

  return (
    <Card className='text-center' style={{ width: '15rem', height: '20rem' }}>
      <Card.Img
        style={{ width: '15rem', height: '10rem' }}
        variant='top'
        src={movie.movie.Poster}
      />
      <Card.Body class='d-flex flex-column'>
        <Card.Title style={{ height: '2rem' }}>
          <Card.Text>{movie.movie.Title}</Card.Text>
        </Card.Title>
        <Card.Text>Year of Release: {movie.movie.Year}</Card.Text>
        <Button
          onClick={() => {
            addToMyList(movie.movie)
          }}
          variant='dark'
        >
          Add To My List
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SearchCard
