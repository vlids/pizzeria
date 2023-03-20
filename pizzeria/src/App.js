import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextoGlobal from './contexts/ContextoGlobal';
import Home from './views/Home';
import Carrito from './views/Carrito.jsx';
import Detalle from './views/Detalle.jsx';
import Barra from './components/Barra.jsx'
import './styles/style.css'


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaPedidas, setPizzaPedidas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  const getPizzas = async () => {
    const res = await fetch(`http://localhost:3000/pizzas.json`);
    const data = await res.json();

    setPizzas(data)
  }


  useEffect(() => {
    getPizzas()
  }, []);

      
  return (
    <div className="App">
    <ContextoGlobal.Provider value={{pizzas,pizzaPedidas,setPizzaPedidas,setTotalPedido,totalPedido}}>
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/carrito' element={<Carrito></Carrito>}></Route>
          <Route path='/detalle/:id' element={<Detalle></Detalle>}></Route>
        </Routes>
      </BrowserRouter>
      </ContextoGlobal.Provider>
    </div>
  );
}

export default App;
