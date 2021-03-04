import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Location from '../location.png';
import Calendar from '../calendar.png';

class Home extends Component {

    constructor(props) {
        super(props);
        const post = [];
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' +  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        for (let i = 0; i < 1200; i++) {
            post.push({
                title: "post " + i,
                description: "Random"
            });
        }

        this.state = { post, currentDate: date};
    }

    render() {
        return (
            <Container style={{ width: "100%" }}>
                <Row>
                    <h1>Home Page</h1>
                </Row>
                <Row className="overflow-auto">
                    {this.state.post.map((posts, index) => (
                        <Card className="col-3 rounded" style={{ marginBottom: "30px", marginRight: "80px" }}>
                            <Card.Body>
                                <Card.Title>{posts.title}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Image width={30} height={30} className="mr-3" src={Location} alt="location" />
                                        {posts.description}
                                    </Row>
                                    <Row>
                                        <Image width={30} height={30} className="mr-3" src={Calendar} alt="location" />
                                        {this.state.currentDate}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        );
    }
}
export default Home;