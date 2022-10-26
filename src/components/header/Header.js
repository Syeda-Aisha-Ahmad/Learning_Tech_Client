import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg'
import './header.css'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className='navbar-style'>
                <Container>

                    <Navbar.Brand href="/">
                        <img src={logo} alt="" className='logo-style' />
                        Learning Tech
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="courses">Courses</Nav.Link>
                            <Nav.Link href="faq">FAQ</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;