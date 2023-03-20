import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal';

const Barra = () => {
  const { totalPedido } = useContext(ContextoGlobal);
  return (
    <div style={{
              display: 'flex', 
              justifyContent: 'space-between',
              backgroundColor: '#333',
              height: '4em',
              alignItems: 'center',
              }} >
      <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')} to='/'          style={{
                      color: 'white', 
                      textDecoration: 'none',
                      marginLeft: '2em',
                      fontSize: '24px'
                      }}>Pizza Mamma Mia</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'viewActiva' : 'view')} to='/carrito' 
                  style={{
                    color: 'white', 
                    textDecoration: 'none',
                    marginRight: '3em',
                    fontSize: '24px'
                    }}>Mi Carrito ($ {totalPedido}) </NavLink>

    </div>
  )
}

export default Barra