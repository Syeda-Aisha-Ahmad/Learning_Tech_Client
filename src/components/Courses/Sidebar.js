import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = (courses) => {
    return (
        <div className='side-bar'>
            <h1>Courses</h1>
            {
                courses.course.map(course => <p > <Link className='course-names' to={`/details/${course.id}`}>{course.name}</Link> </p>)
            }
        </div>
    );
};

export default Sidebar;