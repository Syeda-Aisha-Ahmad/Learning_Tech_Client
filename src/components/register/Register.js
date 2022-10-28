import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

const Register = () => {

    const { createAccount, profileNamePhoto } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        createAccount(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileNamePhotoUrl(name, photo);
                form.reset();
            })
            .catch(error => {
                console.error(error)
            })
    }

    //Update user's profile
    const profileNamePhotoUrl = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        profileNamePhoto(profile)
            .then(() => {

            })
            .catch(error => {

            })
    }


    return (
        <div>
            <Form onSubmit={handleRegister} className='mt-5 mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo Url" />
                </Form.Group>
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
                <p>Already have an account? please <Link to="/login">LogIn</Link></p>
            </Form>
        </div>
    );
};

export default Register;