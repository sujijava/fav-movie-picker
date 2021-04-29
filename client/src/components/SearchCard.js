import React from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SearchCard = (props) => {
  let history = useHistory()
  // console.log(props.movie)
  // console.log(props.disabled)
  // console.log('searchcard')

  const addToMyList = (movie) => {
    // console.log(`${movie.Title} is added`)
    console.log(movie)
    axios
      .post('http://localhost:5000/lists', movie)
      .then((res) => console.log(res.data))
      .then(() => history.push('/nominees'))
  }

  return (
    <Card className='text-center' style={{ width: '15rem', height: '20rem' }}>
      <Card.Img
        style={{ width: '15rem', height: '10rem' }}
        variant='top'
        src={props.movie.Poster}
      />
      <Card.Body class='d-flex flex-column'>
        <Card.Title style={{ height: '2rem' }}>
          <Card.Text>{props.movie.Title}</Card.Text>
        </Card.Title>
        <Card.Text>Year of Release: {props.movie.Year}</Card.Text>
        <Button
          onClick={() => {
            addToMyList(props.movie)
          }}
          disabled={props.disabled}
          variant='dark'
        >
          Add To My List
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SearchCard
