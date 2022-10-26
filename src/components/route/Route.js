import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../login/Login';
import Main from './Main';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/', element: <Login></Login>
                }
            ]
        }
    ])
    return (
        <div>

        </div>
    );
};

export default Route;