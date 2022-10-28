import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutData = useLoaderData();
    const { name, image, description } = checkoutData;
    return (
        <div className='course-details-style'>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <p> {description} </p>
        </div>
    );
};

export default Checkout;