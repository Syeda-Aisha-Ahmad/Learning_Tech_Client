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
import { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { Image } from 'react-bootstrap';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [clicked, setClicked] = useState(false);

    const userLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => { })
    }
    return (
        <div>

            <Navbar className='navbar-style' expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">
                        <Link to={'/'} className='logo-name-style'>
                            <img src={logo} alt="" className='logo-style' />
                            Learning Tech
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">

                            <Nav.Link href="#home">
                                <Link className='nav-link-style' to="courses">Courses</Link>
                            </Nav.Link>

                            <Nav.Link href="#link">
                                <Link className='nav-link-style' to="faq">FAQ</Link>
                            </Nav.Link>

                            <Nav.Link href="#home">
                                <Link className='nav-link-style' to="blog">Blog</Link>
                            </Nav.Link>

                            {
                                user?.uid ?
                                    <div className='d-flex align-items-center'>
                                        {
                                            user?.photoURL ?
                                                <Nav.Link href="#link"><Image
                                                    title={user?.displayName
                                                    }
                                                    className='profile-photo' src={user.photoURL}></Image></Nav.Link>
                                                :
                                                <Nav.Link href="#link"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Nav.Link>
                                        }
                                        <Nav.Link href="#link">
                                            <Link onClick={userLogout} className='log' to='/login'>LogOut</Link>
                                        </Nav.Link>
                                    </div>
                                    :
                                    <Nav.Link href="#link">
                                        <Link className='log' to='/login'>LogIn</Link>
                                    </Nav.Link>
                            }
                            <Nav.Link>
                                {
                                    clicked ?
                                        <FontAwesomeIcon onClick={() => setClicked(!clicked)} icon={faMoon}></FontAwesomeIcon>
                                        :
                                        <FontAwesomeIcon onClick={setClicked} icon={faSun}></FontAwesomeIcon>
                                }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;