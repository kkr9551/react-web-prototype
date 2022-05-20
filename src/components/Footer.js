import React, {useEffect, useState} from 'react';
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {IoTicketOutline} from 'react-icons/io5';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {FaPatreon, FaFacebook, FaTwitter, FaSpotify, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <section>
            <Row style={{height: "100px", marginTop: "20px", backgroundColor: "#e4002b", color: "#fff", fontWeight: "500", textAlign: "center", lineHeight: "1.1"}}>
                <Col xs lg={2}></Col>
                <Col sm="auto">
                    <div>
                        <p className='footer-subscription-heading' style={{marginTop: "39px"}}>
                            Enter your email address to receive our newsletter
                        </p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='input-areas' style={{width: "100%", height:"20px", marginTop: "30px"}}>
                        <InputGroup className="mb-3" style={{size: "32"}}>
                            <FormControl 
                                placeholder="Your Email" aria-describedby="basic-addon2" aria-label="Your Email" />
                            <Button 
                                variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                                {isLoading ? 'Submitting…' : 'Sign Up'}
                            </Button>
                        </InputGroup>  
                    </div>    
                </Col>    
            </Row>
            <Row>
                <Col md={4} style={{height: '100%'}}>
                    <div className="address-and-time" style={{padding: '5px', marginTop: "60px", marginLeft: "50px"}}>
                        <div>
                            <h2 style={{fontSize: '30px'}}>
                                
                                <IoTicketOutline style={{marginRight: '12px'}} />
                                Free entry                                              
                            </h2>
                            <p>Munga 2, Tallinn</p>       
                        </div> 
                        <div>
                            <h2 style={{fontSize: '30px'}}>
                                <AiOutlineClockCircle style={{marginRight: '12px'}} />
                                Time
                            </h2>
                            <p>Thursday and Friday: 14:00-18:00</p>
                            <p>Saturday and Sunday: 11:00-18:00</p>
                        </div>   
                    </div>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <div className="global-footer" style={{marginTop: "65px"}}>
                                <ul>
                                    <li>About us</li>
                                    <li>Mission and history</li>
                                    <li>Accessibility</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="global-footer" style={{marginTop: "65px"}}>
                                <ul>
                                    <li>Exhibition</li>
                                    <li>Banned voices</li>
                                    <li>School visits</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="global-footer" style={{marginTop: "65px"}}>
                                <ul>
                                    <li>Careers</li>
                                    <li>Volunteers</li>
                                    <li>Fellowships</li>    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="global-footer" style={{marginTop: "65px"}}>
                                <ul>
                                    <li>Support</li>
                                    <li>Research projects</li>
                                    <li>Communities</li>    
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="contact-Icon" style={{position: "relative", marginTop: "65px"}}>   
                                <Button variant="outline-danger" style={{position: "relative", marginLeft: "10px", width: '50px', height: '50px', borderRadius: '50%'}}><FaPatreon /></Button>
                                <Button variant="outline-danger" style={{position: "relative", marginLeft: "10px", width: '50px', height: '50px', borderRadius: '50%'}}><FaFacebook /></Button> 
                                <Button variant="outline-danger" style={{position: "relative", marginLeft: "10px", width: '50px', height: '50px', borderRadius: '50%'}}><FaTwitter /></Button>
                                <Button variant="outline-danger" style={{position: "relative", marginLeft: "10px", width: '50px', height: '50px', borderRadius: '50%'}}><FaInstagram /></Button>
                                <Button variant="outline-danger" style={{position: "relative", marginLeft: "10px", width: '50px', height: '50px', borderRadius: '50%'}}><FaSpotify /></Button>
                
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>             
        </section>      
    );
}

export default Footer;

