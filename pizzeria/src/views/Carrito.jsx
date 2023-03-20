import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import ContextoGlobal from '../contexts/ContextoGlobal'
import { calculaTotalPedido } from '../utils/utils';

const Carrito = () => {
  const { pizzaPedidas, totalPedido, setPizzaPedidas, setTotalPedido } = useContext(ContextoGlobal);

  const disminuirCantidad = (id) => {
    const idx = pizzaPedidas.findIndex((p)=> p.id === id);

    if (idx >= 0) {
      
      if (pizzaPedidas[idx].cant > 0){
          pizzaPedidas[idx].cant -= 1;
          if (pizzaPedidas[idx].cant === 0){
            pizzaPedidas.splice(idx,1);
          }
          setPizzaPedidas([...pizzaPedidas]);
        }
      

    }
    const totalPedidoActual = calculaTotalPedido(pizzaPedidas);
    setTotalPedido(totalPedidoActual);
  }

  const aumentarCantidad = (id) => {
    const idx = pizzaPedidas.findIndex((p)=> p.id === id);

    if (idx >= 0) {
      pizzaPedidas[idx].cant += 1;
      setPizzaPedidas([...pizzaPedidas]);
    }
    const totalPedidoActual = calculaTotalPedido(pizzaPedidas);
    setTotalPedido(totalPedidoActual);
  }

  return (
    <div className='p-5' >
      <h3>Detalle del pedido:</h3>
        <div className='bg-light w-75 m-auto p-5 fs-4' >
        <div className='d-flex justify-content-between py-2'>
        
          <div className='d-flex w-50 justify-content-between align-items-center'>
            <h6 className='mb-0 text-capitalize p-2'>Producto</h6>
          </div>
          <div className='d-flex w-50 justify-conten-between align-items-center'>
            <h6 className='mb-0 p-2 text-success w-50'>Subtotal</h6>
            <strong className='w-50 text-center'>Cantidad</strong>
          </div>

        </div>

        {
          pizzaPedidas.map((pizza, i)=> {
            return (<div key={i} className='d-flex justify-content-between py-2'>
                        <div className='d-flex w-50 justify-content-between align-items-center'>
                            <img src={pizza.img} width='50' alt='pizza'/>
                            <h6 className='mb-0 text-capitalize p-2'>{pizza.name}</h6>
                        </div>
                        <div className='d-flex w-50 justify-content-between align-items-center'>
                            <h6 className='mb-0 p-2 text-success w-50'>$ {(pizza.price * pizza.cant)}</h6>
                        <div className='w-50 text-center'>
                            <Button variant='danger' size='sm' onClick={()=>disminuirCantidad(pizza.id)}> - </Button>
                            <strong className='px-3 fs-5' > {pizza.cant}</strong>

                            <Button variant='success' size='sm' onClick={()=>aumentarCantidad(pizza.id)}> + </Button>
                        </div>
                        </div>
                    </div>
            );
          })
        }
        <div className='fs-5' >Total Pedido:<strong>$ {totalPedido}</strong></div>
      </div>
    </div>
  )
}

export default Carrito