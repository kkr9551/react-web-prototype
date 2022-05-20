import React from 'react';
import {Navbar, Nav, Container, Form, Button, FormControl} from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    Banned Books
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item><Nav.Link href="/visit">Visit</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/exhibition">Exhibition</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/learn">Learn</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/banned voices">Banned voices</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/support">Support us</Nav.Link></Nav.Item>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigation;