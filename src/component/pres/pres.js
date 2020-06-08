import React from 'react';

import { Link } from 'react-router-dom';

function pres(props) {
    console.log(props);
    return (
        <div>
            <h1>{'Pagina de presentacion'}</h1>
            <p>
                <li>
                    Edwin Carreño
                </li>
                <li>
                    Camilo Salgado
                </li>
                <li>
                    Jose Peñaloza
                </li>
                <li>
                    William Gonzalez
                </li>
                <li>
                    Richard Cortazar
                </li>
                <li>
                    Cristian LLanos
                </li>
                <li>
                <input
                     type="button"
                     onclick=" location.href='https://github.com/racortazarf/Parcial3Cod' "
                     value="Repositorio front"
                     name="boton"
                     id="botonrepo"
                 />
                </li>
                <li>
                <input
                     type="button"
                     onclick="location.href='https://github.com/camilo95951/Parcial3_Back'; "
                     value="Repositorio back"
                     name="boton"
                     id="botonrepo"
                 />
                </li>
            </p>
            <li>
             <Link to="/home">{'Pagina de inicio'}</Link>
            </li>
        </div>
    );
}

export default pres;
