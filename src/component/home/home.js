import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
  


function home(props) {
  console.log(props);
  return (
    <div><center> 
      <br />       
      <h1 className="encabezado">{'Pagina de home'}</h1>
      <br />
      <div>
        <Link to="/regis" id="nombres">{'Registrese'}</Link>
      </div>
      <br />
      <div>
        <Link to="/visual" id="nombres">{'Usuarios registrados'}</Link>
      
      </div>
      <br />
      <div>
        <Link to="/mod" id="nombres">{'Modificar-actualizar usuarios'}</Link>
      </div>
      <br />
      <div>
        <Link to="/" id="nombres">{'Acerca de nosotros'}</Link>
      </div>
    </center></div>
  );
}

export default home;