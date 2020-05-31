import React from 'react';

import { Link } from 'react-router-dom';

function home(props) {
  console.log(props);
  return (
    <div>
      <h1 id="titulo">{'P0'}</h1>
  <h2>{'P1'}</h2>
  <li>
  <Link to="/regis">{'Registrese !!'}</Link>
  </li>

    </div>

  );
}

export default home;