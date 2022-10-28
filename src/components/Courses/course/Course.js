import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Course = ({ course }) => {
    return (
        <div>
            <CardGroup>
                <Card className='m-4'>
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>
                            {course.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Total: {course.total}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Course;