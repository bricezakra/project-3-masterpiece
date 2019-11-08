import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";


class Books extends Component {
    render() {
        return (
        <Container fluid>
            <Row>
                <div class="col-md-6 offset-md-3 col-sm-12">
                    <h1 class="text-center">
                        MongoChat 
                        <button id="clear" class="btn btn-danger">Clear</button>
                    </h1>
                    <div id="status"></div>
                    <div id="chat">
                        <input type="text" id="username" class="form-control" placeholder="Enter name..." />
                        <br />
                        <div class="card">
                            <div id="messages" class="card-block">

                            </div>
                        </div>
                        <br />
                        <textarea id="textarea" class="form-control" placeholder="Enter message..."></textarea>
                    </div>
                </div>
            </Row>
        </Container>
        );
    }
}