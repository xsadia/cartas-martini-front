import React from 'react'
import { Container, Row, Col, Navbar, Nav, Button} from 'react-bootstrap'
import './styles/landing.css';

const Landing = () => {
    return (
       <>
         <Navbar fixed="top" bg="dark" variant="dark" className="nav-landing">
                    <Navbar.Brand href="/">Cartini</Navbar.Brand>
                    <Nav className="mr-auto ">
                        <Nav.Link href="/form">Enviar Cartinha 💌</Nav.Link>
                    </Nav>
         </Navbar>
         <Container  fluid className="main">
            <Row className="justify-content-xs-center" xs={12}>
                 <Col>
                    <h2>Cartinhas para martini</h2>
                    <a href="/cartas" className="butao-anchor"><Button variant="outline-secondary" className="butao">Ler</Button></a>
                </Col>
             </Row>
         </Container>
       </>
    );
}

export default Landing;