import React from 'react';

import { Link } from 'react-router-dom';

function home(props) {
  console.log(props);
  return (
    <div>
      
  <h2>{'Pagina de home'}</h2>
  <li>
  <Link to="/regis">{'Registrese !!'}</Link>
  </li>
  <li>
  <Link to="/visual">{'Usuarios registrados !!'}</Link>
  </li>
  <li>
  <Link to="/mod">{'Modificar-actualizar usuarios !!'}</Link>
  </li>
  <li>
  <Link to="/">{'Acerca de nosotros !!'}</Link>
  </li>

    </div>

  );
}

export default home;