import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, CardGroup, Alert } from 'react-bootstrap'
import SearchCard from './SearchCard'

const API_KEY = 'df28ea6e'

const Search = () => {
  const [term, setTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    performSearch()
    console.log(searchResults)
  }, [term])

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
    return (
      <div key={index}>
        <SearchCard movie={movie}></SearchCard>
      </div>
    )
  })

  const noResults = (
    <Alert className='w-100' variant='success'>
      <p>Please start search</p>
    </Alert>
  )
  return (
    <div>
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
    </div>
  )
}

export default Search
