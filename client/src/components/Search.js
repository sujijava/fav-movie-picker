import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, CardGroup, Alert } from 'react-bootstrap'
import SearchCard from './SearchCard'
import { useHistory } from 'react-router-dom'

const API_KEY = 'df28ea6e'

const Search = () => {
  let history = useHistory()

  const [term, setTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [nominees, setNominees] = useState([])
  const [duplicatedImdbID, setDuplicatedImdbID] = useState([''])

  useEffect(() => {
    performSearch()

    axios
      .get('http://localhost:5000/lists/')
      .then((res) => setNominees(res.data))
  }, [term])

  useEffect(() => {
    const data = [...nominees, ...searchResults]

    function getDuplicateArrayElements(arr) {
      var sorted_arr = arr.slice().sort()
      var results = []
      for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1].imdbID === sorted_arr[i].imdbID) {
          results.push(sorted_arr[i].imdbID)
        }
      }
      return results
    }

    const duplicates = getDuplicateArrayElements(data)

    setDuplicatedImdbID(duplicates)
  }, [nominees])

  useEffect(() => {
    console.log('nomineses changes')
  }, [nominees])

  const performSearch = async () => {
    console.log('search clicked')
    console.log(term)
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=${API_KEY}&s=${term}`
    )
    if (data.Response === 'True') {
      setSearchResults(data.Search)
    }
  }

  const renderedResults = searchResults.map((movie, index) => {
    console.log(movie.imdbID)
    console.log(duplicatedImdbID)
    return (
      <div key={index}>
        <SearchCard
          movie={movie}
          disabled={duplicatedImdbID.includes(movie.imdbID) ? true : false}
        ></SearchCard>
      </div>
    )
  })

  const noResults = (
    <Alert className='w-100' variant='primary'>
      <p>Please start search</p>
    </Alert>
  )

  const moreThanFive = (
    <Alert className='w-100' variant='danger'>
      <p>You have nominated 5 movies. </p>
    </Alert>
  )

  return (
    <div style={{ marginTop: '5%' }}>
      <div>
        <Form>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Enter a movie title'
              onChange={(e) => setTerm(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <CardGroup>
        {searchResults.length === 0 ? noResults : renderedResults}
      </CardGroup>
      {nominees.length >= 5 ? moreThanFive : ''}
    </div>
  )
}

export default Search
