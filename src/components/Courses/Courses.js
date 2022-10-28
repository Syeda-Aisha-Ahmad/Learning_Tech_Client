import React, { useState } from 'react';
import { useEffect } from 'react';
import Course from './course/Course';
import './course/courses.css'
import Sidebar from './Sidebar';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://a-10-api.vercel.app/courses ')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>

            <div className='Courses'>

                <div className='card-group-style'>

                    {
                        courses.map(course =>
                            <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                    }
                </div>

                <div className='side-bar'>
                    <Sidebar
                        key={courses.id}
                        course={courses}
                    ></Sidebar>
                </div>
            </div>
        </div >
    );
};

export default Courses;