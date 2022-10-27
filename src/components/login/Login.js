import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import googleLogo from './google.png'
import gitLogo from './github.png'
import './login.css'

const Login = () => {
    return (
        <div>
            <Form className='mt-5 mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='mb-4' variant="danger" type="submit">
                    Submit
                </Button>
                <p className='mb-0'>Or login with ...</p>
                <div className='logo-div-style'>

                    <img className='logo-style' src={googleLogo} alt="" />
                    <img className='logo-style' src={gitLogo} alt="" />
                </div>
                <p>Don't have an account? please <Link to="/register">Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;