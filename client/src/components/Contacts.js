import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Contacts() {
  return (
    <div style={{ marginLeft: 64 }}>
      <Jumbotron>
        <h1 className="display-3">Welcome to Wi-Contacts!</h1>
        <p className="lead">This page will contain the contacts of developers of Wi-Finder app </p>
        <hr className="my-2" />
        <p>You can contact if you are having issues or enjoying our app, feedback would be really appreciated!</p>
        <p className="lead">
        </p>
      </Jumbotron>
      <Form style={{ marginLeft: 64 }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>First and Last name</Form.Label>
          <Form.Control type="text" placeholder="First and Last name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
};

export default Contacts;

