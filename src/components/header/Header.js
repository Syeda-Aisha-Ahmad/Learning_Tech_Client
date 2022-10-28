import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div>
            <Navbar expand="lg" className='d-flex navbar-style '>
                <Container>

                    <Navbar.Brand><Link to={'/'} className='logo-name-style'>
                        <img src={logo} alt="" className='logo-style' />
                        Learning Tech
                    </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link-style' to="courses">Courses</Link>
                            <Link className='nav-link-style' to="faq">FAQ</Link>
                            <Link className='nav-link-style' to="blog">Blog</Link>

                            <div className='mode'>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </div>
                            <Link className='login' to='/login'>LogIn</Link>
                            {
                                clicked ?
                                    <div>
                                        <FontAwesomeIcon onClick={() => setClicked(!clicked)} icon={faMoon}></FontAwesomeIcon>
                                    </div>
                                    :
                                    <div>
                                        <FontAwesomeIcon onClick={setClicked} icon={faSun}></FontAwesomeIcon>
                                    </div>
                            }
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;