import React, { Component } from 'react'
import axios from 'axios'
import { ListGroup, Button, ListGroupItem, Alert } from 'react-bootstrap'

export default class FavoriteMovie extends Component {
  constructor(props) {
    super(props)
    this.state = { myList: [] }
  }

  deleteMyList = (movie) => {
    console.log('will be delete' + movie._id)
    axios.delete('/lists/' + movie._id)
    const newList = this.state.myList.filter(
      (element) => element._id !== movie._id
    )
    this.setState({ myList: newList })
  }

  componentDidMount() {
    axios.get('/lists/').then((response) => {
      this.setState({ myList: response.data })
    })
  }

  render() {
    const initList = this.state.myList.map((eachMovie, index) => {
      return (
        <div className='container' style={{ marginTop: '1%', opacity: '0.9' }}>
          <ListGroup key={index}>
            <ListGroupItem>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-9'>{eachMovie.Title}</div>
                  <div className='col-sm-3'>
                    <Button
                      onClick={() => this.deleteMyList(eachMovie)}
                      variant='outline-danger'
                    >
                      <i className='bi bi-trash'></i> Delete
                    </Button>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      )
    })

    const nothingListed = (
      <Alert className='mt-3 w-100' variant='primary'>
        <p>Warning: Nominees List is empty</p>
      </Alert>
    )

    return (
      <div>{this.state.myList.length === 0 ? nothingListed : initList}</div>
    )
  }
}
