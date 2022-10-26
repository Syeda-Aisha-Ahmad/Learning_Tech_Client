import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Header = () => {
    const [clicked, setClicked] = useState(false);
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
                            {
                                clicked ?
                                    <div className='dark-mode'>
                                        <FontAwesomeIcon onClick={() => setClicked(!clicked)} icon={faMoon}></FontAwesomeIcon>
                                    </div>
                                    :
                                    <div className='light-mode'>
                                        <FontAwesomeIcon onClick={setClicked} icon={faSun}></FontAwesomeIcon>
                                    </div>
                            }
                            <div className='dark-mode'>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </div>
                            <Link to='/login'><Button variant="outline-danger" className='ms-2 p-3'>LogIn</Button></Link>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;