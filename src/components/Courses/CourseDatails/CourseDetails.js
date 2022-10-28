import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './courseDetails.css'

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    const { name, image, description } = courseDetails;
    return (
        <div className='course-details-style'>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <p> {description} </p>
        </div>
    );
};

export default CourseDetails;