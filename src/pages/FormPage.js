import React, {useState} from 'react'
import { Container, Col, Row, Nav, Navbar, Form, Button} from 'react-bootstrap'
import api from '../services/api'
import './styles/form.css'

const FormPage = (props) => {
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [counter, setCounter] = useState(0);

    const params = JSON.stringify({

        "author": author,
        
        "content": content,
        
        });

    async function handleSubmit(evt){
        evt.preventDefault();
        await api.post("cartas",params, {

            "headers": {
            
            "content-type": "application/json",
            
            }});

            props.history.push('/cartas');

        console.log(author);
        console.log(content);
    }

    const handleChange = (e) => {
        setContent(e.target.value)
        setCounter(e.target.value.length)
    }

    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" className="nav-landing">
                    <Navbar.Brand href="/">Cartini</Navbar.Brand>
                    <Nav className="mr-auto ">
                        <Nav.Link href="/form">Enviar Cartinha 💌</Nav.Link>
                    </Nav>
            </Navbar>

            <Container fluid className="body">
                <Container>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formAutor" >
                                <Form.Label className="label-autor">Autor</Form.Label>
                                <Form.Control type="text" placeholder="Nome do autor"  value={author} onChange={e => setAuthor(e.target.value)}/>
                                
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1" >
                                <Form.Label>Conteúdo</Form.Label>
                                <Form.Control as="textarea" rows={3} value={content} onChange={handleChange} />
                                <Form.Text className="text-muted">
                                   {counter === 0 ?  "Máximo 255 caracteres." : `${counter} caracteres`}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit">
                                Enviar
                            </Button>
                        </Form>

                        </Container>
                    </Container>
        </>
    );
}

export default FormPage;