import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './courseDetails.css'
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { name, image, description, id } = courseDetails;
    return (
        <div className='course-details-style'>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <p> {description} </p>
            <Link to={`/checkout/${id}`}><Button variant="warning">Get Premium</Button></Link>
        </div>
    );
};

export default CourseDetails;