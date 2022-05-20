import React from "react";
import {Col, Container, Row, Card, CardGroup} from "react-bootstrap";
import Footer from "../Footer";

const Visit = () => {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Text>
                                <div>
                                    <h2>Banned Books Museum</h2>
                                    <p>
                                        We are in Tallinn, Estonia.
                                    </p> 
                                    <p>
                                        We preserves banned, censored, and burned books from around the world. 
                                    </p>
                                    <p>
                                        We tell the stories of our books and their authors, and provide 
                                        resources for learning about the history of censorship, contemporary 
                                        challenges, and the free exchange of ideas.
                                    </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>    
                </Col>
                <Col>
                    <div>
                        <img src="./images/address.jpeg" alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{position: "relative", marginTop: "20px"}}>
                    <div>
                        <h4>Ways to explore</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <CardGroup style={{marginTop: "20px", position: "relative"}}>
                    <Card>
                        <Card.Img variant="top" src="./images/collaboration.JPG" style={{height: '310px'}} />
                        <Card.Body>
                            <Card.Title>Collaboration</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/school-visits.JPG" style={{height: '310px'}} />
                        <Card.Body>
                        <Card.Title>School visits</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/exhibition.JPG" style={{height: '310px'}} />
                        <Card.Body>
                        <Card.Title>Exhibition</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
        <div>
            <Footer />
        </div>
        </>
    );
}

export default Visit;