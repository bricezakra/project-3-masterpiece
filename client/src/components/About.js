import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
   return (
       <div style={{ marginLeft: 64, background: "../images/prism.png" }}>
           <Container>
           <h2><font color="blue"><strong>ABOUT OUR APP</strong></font></h2>
           <h3> About Our App:</h3>
           <div>Wi-Finder is an app that locates all free wifi locations in the city of New York, and the app is currently in progress of becoming nationwide. Our backend team which includes Brice Zakra and Randall Fields added features that makes each wifi location interactive. It will show the location name and address, and whether it is an outdoor kiosk, subway station, etc.</div>
           <br />
               <Row >
                   <Col>
                       <Card style={{ width: '18rem', marginBottom: 64 }}>
                           <Card.Img variant="top" src="holder.js/100px180" />
                           <Card.Body>
                               <Card.Title>Erika Gonzalez</Card.Title>
                               <Card.Text>
                                   Git Hub:
                                   LinkedIn:
                                   Email
                                   fivver
                               </Card.Text>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col>
                       <Card style={{ width: '18rem', marginBottom: 64 }}>
                           <Card.Img variant="top" src="holder.js/100px180" />
                           <Card.Body>
                               <Card.Title>Erika Gonzalez</Card.Title>
                               <Card.Text>
                                   Git Hub:
                                   LinkedIn:
                                   Email
                               </Card.Text>
                           </Card.Body>
                       </Card>
                   </Col>
               </Row>
               <Row className="justify-content-md-center">
               <Col>
                       <Card style={{ width: '18rem' }}>
                           <Card.Img variant="top" src="./images/pictureofme.jpg" />
                           <Card.Body>
                               <Card.Title>Erika Gonzalez</Card.Title>
                               <Card.Text>
                                   Git Hub:
                                   LinkedIn:
                                   Email
                               </Card.Text>
                           </Card.Body>
                       </Card>
                       </Col>
                       <Col>
                       <Card style={{ width: '18rem' }}>
                           <Card.Img variant="top" src="holder.js/100px180" />
                           <Card.Body>
                               <Card.Title>Erika Gonzalez</Card.Title>
                               <Card.Text>
                                   Git Hub:
                                   LinkedIn:
                                   Email
                               </Card.Text>
                           </Card.Body>
                       </Card>
                   </Col>
               </Row>
           </Container>
       </div>
   )
}

export default About
