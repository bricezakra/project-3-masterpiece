import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Background from '../images/background_image.png';


function About() {
    return (

        <div style={{
            marginLeft: 64, width: "100%", height: 1200, 
             backgroundImage: `url(${Background})`    
        }}>
            <Jumbotron>
                <h1 className="display-3">About Wi-finder!</h1>
                <p className="lead">A little information about our app. </p>
                <hr className="my-2" />
                <p>Wi-Finder is an app that locates all free wifi locations in the city of New York, and the app is currently in progress of becoming nationwide. Our backend team which includes Brice Zakra and Randall Fields added features that makes each wifi location interactive. It will show the location name and address, and whether it is an outdoor kiosk, subway station, etc.</p>
                <p className="lead">
                </p>
            </Jumbotron>
        
                <Row style={{ margin: 64 }} >
                    <Col>
                        <Card style={{ width: '18rem', marginBottom: 64 }}>
                            <Card.Img variant="top" src="randall.jpg" style={{ height: 350 }} />
                            <Card.Body>
                                <Card.Title>Randall Fields</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/rfields1128">Github</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/randall-fields-735923190/">LinkedIn</a></li>
                                        <li>E-mail: rfields1128@yahoo.com</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', marginBottom: 64 }}>
                            <Card.Img variant="top" src="erika.jpg" style={{ height: 350 }} />
                            <Card.Body>
                                <Card.Title>Erika Gonzalez</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/erikagonzalez64">Github</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/erika-gonzalez-1290a4191/">LinkedIn</a></li>
                                        <li>E-mail: gonzalezerika75951@gmail.com</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="brice.jpg" style={{ height: 350 }} />
                            <Card.Body>
                                <Card.Title>Brice Zakra</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/bricezakra">Github</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brice-zakra-11571832/">LinkedIn</a></li>
                                        <li>E-mail: bricezakra@live.com</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="makhsumbek.jpg" style={{ height: 350 }} />
                            <Card.Body>
                                <Card.Title>Makhsumbek Karamatov</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/uzbekhabib23">Github</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/makhsumbek-karamatov-15a2a7196/">LinkedIn</a></li>
                                        <li>E-mail: uzbekhabib23@gmail.com</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
        </div>

    )
}

export default About
