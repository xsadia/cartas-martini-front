import React, { useEffect, useState } from 'react'
import api from '../services/api';

import { Container, Col, Row, Card, Navbar, Nav, Badge} from 'react-bootstrap';
import './styles/vsf.css';

const Cartas = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await api.get("cartas").then(res => setData(res.data));
    }

    useEffect(async () => {
        await fetchData();
    }, [])

    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" className="padding">
                    <Navbar.Brand href="/">Cartini</Navbar.Brand>
                    <Nav className="mr-auto ">
                        <Nav.Link href="/form">Enviar Cartinha 💌</Nav.Link>
                    </Nav>
            </Navbar>
         
        <Container fluid className="body">
           
            <Row xs={12}>
                {data.map(data => (
                    <Col xs={12} md={6} className="mb-5 topo" key={data.id} >
                        <Card className="h-100 shadow-sm bg-white rounded">
                            <Card.Body className="d-flex flex-column cu">
                                 <div className="d-flex mb-2 justify-content-between">
                                    <Card.Title className="mb-0 font-weight-bold">{data.author}</Card.Title>
                                    <Badge pill className="mb-1" variant="danger">💌</Badge>
                                </div>
                                <Card.Text className="text-secondary">{data.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
}

export default Cartas;