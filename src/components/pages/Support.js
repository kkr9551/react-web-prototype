import React from "react";
import Footer from "../Footer";
import {Row, Col, Figure, Container, Card} from "react-bootstrap";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Support = () => {
    const supportTypes = [
        {
            img: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/274703821_475062177602086_2431432540346400989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=IokT8j8UDPIAX-6PClU&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8T7-PfIEp10lwv5CVW4m4Z7-rTZ8WqCTaEalQKVhApMQ&oe=628AD044",
            title: "",
            text: ""
        },

        {
            img: "",
            title: "",
            text: ""
        },

        {
            img: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/276044027_489186776189626_1364018481986853594_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=-4MLJMtVqHoAX-r-yRD&_nc_ht=scontent-lhr8-2.xx&oh=00_AT8Zou3IAWIet0diMxW-2k53H4WVWnYvhKYP7bugo8UnJQ&oe=628AAB54",
            title: "",
            text: ""
        },

        {
            img: "",
            title: "",
            text: ""
        }
    ];
    
    return(
        <>
        <Row>
            <Col>
                <Container>
                    <Figure>
                        <Figure.Image
                            fluid={true}
                            alt=""
                            src="./images/support.JPG"
                            style={{width: '1600px', height: '100%', position: 'relative', align: 'center'}}
                        />
                        <Figure.Caption>
                            <div style={{borderBottom: '1px solid'}}>
                                <h1>Support us</h1>
                            </div>
                        </Figure.Caption>
                    </Figure>
                </Container>        
            </Col>    
        </Row>
        <Row>
            <Col xs={12} md={7}>
                <div style={{marginLeft: '69px', marginTop: '20px'}}>
                    <h2 style={{fontSize: '25px', fontWeight: 'bold'}}>
                        We're glad you're here, because we need you!
                    </h2>
                    <p>The Banned Books Museum relies on support from a wide range of</p>
                </div>    
            </Col>
            <Col xs={12} md={5}>
                
                <div styly={{width: '20px'}}>
                    <h3 style={{margin: '0'}}>
                        Share the page
                        <ul style={{listStyle: 'none', float: 'right', marginRight: '300px', display: 'flex', alignItems: 'center'}}>
                            <li style={{position: 'relative'}}>
                                <a href="http://www.facebook.com/share.php?u=https://www.bannedbooksmuseum.com/support-us">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li style={{position: 'relative', marginLeft: '10px'}}>
                                <a href="https://twitter.com/intent/tweet?text=Support%20us&url=https://www.bannedbooksmuseum.com/support-us">
                                    <FaTwitter />
                                </a>
                            </li>
                        </ul>
                    </h3>
                </div>
                <div>
                    <h4>Contact us</h4>
                </div>       
            </Col>
        </Row>
        <Row xs={1} md={2} className="g-4" style={{marginLeft: '10px', marginRight: '10px'}}>
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        <Row>

        </Row>
        <div>
        <Footer />
        </div>
        </> 
    );   
}

export default Support;