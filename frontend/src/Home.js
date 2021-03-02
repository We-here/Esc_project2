import logo from './circular_logo.png';
import { Container, Col, Row } from 'react-bootstrap';
import {useState} from 'react';

function Home({ changeLogin }) {

    return ( 
        <div>
            <Container alight-content="base">
                <Row classname="justify-content-md-center" >
                    <Col>
                        <Row>
                            <h1>Connect with the people around you</h1>
                        </Row>
                        <Row>
                            <h2>Add some other catchphase here</h2>
                        </Row>
                        <Row>
                        <button id="homeButton" onClick={changeLogin}>Join in the scratchback family today</button>
                        </Row>
                    </Col>
                    <Col md="auto">
                        <img id="homeImage" src={logo} alt="Logo" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Home;
