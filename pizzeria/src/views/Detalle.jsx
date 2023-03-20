import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal';

const Detalle = () => {
 const { id } = useParams();

 const { pizzas } = useContext(ContextoGlobal);

  const idxPizza = pizzas.findIndex((p)=> p.id === id);
  const pizzaDetalle = pizzas[idxPizza];
 

  return (
    <Card style={{ width: '18rem', marginTop: '1em' }}>
      <Card.Img variant="top" src={pizzaDetalle.img} />
      <Card.Body>
        <Card.Title>{pizzaDetalle.name}</Card.Title>
        <div>
          <h5>Ingredientes</h5>
          <ul>
            {
              pizzaDetalle.ingredients.map((i) => <li key={i} >{i}</li>)
            }
          </ul>
        </div>
        <div>
           <h4>$ {pizzaDetalle.price}</h4>
        </div>
          <Button variant="danger">Añadir</Button>
      </Card.Body>
    </Card>
  );
}

export default Detalle