import React from 'react';
import banner from './banner.jpg'
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='home-style'>
                <h1>Become a programmer with Learning Tech</h1>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;