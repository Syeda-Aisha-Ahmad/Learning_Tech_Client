import React from "react";
import { Link, useLoaderData } from 'react-router-dom';
import './courseDetails.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { name, image, description, id } = courseDetails;
    const ref = React.createRef();

    return (

        <div className='course-details-style'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <h1>{name} <FontAwesomeIcon onClick={toPdf} icon={faDownload} title="Download PDF"></FontAwesomeIcon></h1>}
            </Pdf>
            <div ref={ref}>
                <img src={image} alt="" />
                <p> {description} </p>
                <Link to={`/checkout/${id}`}><Button variant="warning">Get Premium</Button></Link>
            </div>
        </div>
    );
};
export default CourseDetails;