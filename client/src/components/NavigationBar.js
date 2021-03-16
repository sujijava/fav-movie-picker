import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav>
        <Nav.Item>
          <Nav.Link href='/'>Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/favMovie'>Favorite Movie</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
