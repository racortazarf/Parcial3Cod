import React from 'react';

import { Link } from 'react-router-dom';

function home(props) {
  console.log(props);
  return (
    <div><center> 
      <br />       
      <h1>{'Pagina de home'}</h1>
      <br />
      <div>
        <Link to="/regis">{'Registrese !!'}</Link>
      </div>
      <br />
      <div>
        <Link to="/visual">{'Usuarios registrados !!'}</Link>
      </div>
      <br />
      <div>
        <Link to="/mod">{'Modificar-actualizar usuarios !!'}</Link>
      </div>
      <br />
      <div>
        <Link to="/">{'Acerca de nosotros !!'}</Link>
      </div>
    </center></div>
  );
}

export default home;