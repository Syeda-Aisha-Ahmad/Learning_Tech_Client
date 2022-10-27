import React, { useState } from 'react';
import { useEffect } from 'react';
import Course from './course/Course';
import './course/courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses ')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className='text-style'>Courses</h1>
            <div className='card-group-style'>
                {
                    courses.map(course =>
                        <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                }
            </div>
        </div >
    );
};

export default Courses;