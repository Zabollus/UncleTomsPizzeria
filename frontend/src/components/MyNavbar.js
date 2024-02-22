import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand href='/' style={{color:"white"}}>Uncle Toms Pizzeria</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/add/pizza' style={{color:"white"}}>Dodaj pizzę</Nav.Link>
                    <Nav.Link href='/add/topping' style={{color:"white"}}>Dodaj składnik</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;