import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand href='/'>Shoppies by Susie</Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Item>
          <Nav.Link href='/nominees'>Nominees</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
