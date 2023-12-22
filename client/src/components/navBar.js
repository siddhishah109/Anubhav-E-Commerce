import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{overflow:'hidden'}}  className=" navBox bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className='title-nav'>Anubhav</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />


        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-link-bar me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2"><AutoAwesomeMosaicIcon/> Categories</Nav.Link>
            <Nav.Link href="#action2"><LoyaltyIcon/> Deals</Nav.Link>
            <Nav.Link href="#action2"><ShoppingCartIcon/> Cart</Nav.Link>
            <Button className="signin-button" variant="contained" >Sign In</Button>
            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar