import React, { useContext } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CardPizza from '../components/CardPizza.jsx';
import ContextoGlobal from '../contexts/ContextoGlobal';

const Galeria = () => {
    const { pizzas } = useContext(ContextoGlobal);
  return (
    <Container>
        <Row md={3}>
           {
            pizzas.map((pizza) => {
                return <Col key={pizza.id}><CardPizza pizza={pizza}></CardPizza></Col>
            })
           } 
        </Row>

    </Container>
  )
}

export default Galeria