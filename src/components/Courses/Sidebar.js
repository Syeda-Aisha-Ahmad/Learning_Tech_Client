import React from 'react';
import './sidebar.css'

const Sidebar = (courses) => {
    console.log(courses.course)
    return (
        <div className='side-bar'>
            <h1>Courses</h1>
            {
                courses.course.map(course => <p className='course-names'>{course.name}</p>)
            }
        </div>
    );
};

export default Sidebar;