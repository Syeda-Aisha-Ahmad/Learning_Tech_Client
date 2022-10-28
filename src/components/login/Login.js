import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import googleLogo from './google.png'
import gitLogo from './github.png'
import './login.css'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { useState } from 'react';
const Login = () => {
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const { googleSignIn, githubLogIn } = useContext(AuthContext);

    const [errorText, setErrorText] = useState();

    // Google Login
    const googleHandler = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
                setErrorText(error.message)
            })

        // })
    }

    // Github Login
    const githubHandler = () => {
        githubLogIn(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.value;
        const password = event.target.value;
        console.log(email, password)
    }
    return (
        <div>
            <Form onChange={handleLogin} className='mt-5 mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button className='mb-4' variant="danger" type="submit">
                    Submit
                </Button>
                <p>{errorText}</p>
                <p className='mb-0'>Or login with ...</p>
                <div className='logo-div-style'>

                    <img onClick={googleHandler} className='logo-style' src={googleLogo} alt="" />
                    <img onClick={githubHandler} className='logo-style' src={gitLogo} alt="" />
                </div>
                <p>Don't have an account? please <Link to="/register">Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;