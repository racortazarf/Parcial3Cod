import React from 'react';

import { Link } from 'react-router-dom';

function pres(props) {
    console.log(props);
    return (
        <div><center>
            <h1>{'Pagina de presentacion'}</h1>
            <p>
                <div>
                    Edwin Carreño
                </div>
                <br />
                <div>
                    Camilo Salgado
                </div>
                <br />
                <div>
                    Jose Peñaloza
                </div>
                <br />
                <div>
                    William Gonzalez
                </div>
                <br />
                <div>
                    Richard Cortazar
                </div>
                <br />
                <div>
                    Cristian LLanos
                </div>
                <br />
                <div>
                <input
                     type="button"
                     onclick=" location.href='https://github.com/racortazarf/Parcial3Cod' "
                     value="Repositorio front"
                     name="boton"
                     id="botonrepo"
                 />
                </div>
                <br />
                <div>
                <input
                     type="button"
                     onclick="location.href='https://github.com/camilo95951/Parcial3_Back'; "
                     value="Repositorio back"
                     name="boton"
                     id="botonrepo"
                 />
                </div>
                <br />
            </p>
            <div>
             <Link to="/home">{'Pagina de inicio'}</Link>
            </div>
        </center></div>
    );
}

export default pres;
