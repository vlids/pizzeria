import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal';


function CardPizza({pizza}) {
  const navigate  = useNavigate();

  const { pizzaPedidas, setPizzaPedidas, totalPedido, setTotalPedido } = useContext(ContextoGlobal);

  const verDetalle = () => {
    navigate(`/detalle/${pizza.id}`)
  }

  const agregarPizza = (pizza) =>{
    const idx = pizzaPedidas.findIndex((p)=> p.id === pizza.id);

    if (idx >= 0) {
      pizzaPedidas[idx].cant += 1;
      setPizzaPedidas([...pizzaPedidas]);
    } else {
      const pizzaSeleccionada = {id:pizza.id, name:pizza.name, price:pizza.price, img: pizza.img, cant:1};
      setPizzaPedidas([...pizzaPedidas,pizzaSeleccionada]);
    }
    setTotalPedido(totalPedido+pizza.price)
  }

  return (
    <Card style={{ width: '20rem', marginTop: '1em' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <div>
          <h5>Ingredientes</h5>
          <ul style={{listStyleType: 'none'}} >
            {
              pizza.ingredients.map((i) => <li key={i} >{i}</li>)
            }
          </ul>
        </div>
        <div>
           <h4>$ {pizza.price}</h4>
        </div>
        <Button variant="primary" onClick={()=>verDetalle()} >Ver más</Button>
        <Button variant="danger" onClick={()=>agregarPizza(pizza)} style={{ marginLeft: '1em' }}>Añadir</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;