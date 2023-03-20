import React from 'react';
import ingredientes from '../images/ingredientes.png';


const Header = () => {
  return (
    <div className='contenedor'>
      <img src={ingredientes} />
      
      <div className='centrado'>Mamma Mia</div>
    </div>
  )
}

export default Header