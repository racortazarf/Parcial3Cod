import React from 'react';
import './pres.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

function pres(props) {
    console.log(props);
    return (
        <div><center>
            <h1 className="encabezado">{'Pagina de presentacion'}
            <br />
            <Link to="/home">
                <Button
                    type="reset"
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}>
                    Pagina de Inicio
                </Button>
            </Link> 
            </h1>
            <p>
                <div id="nombres">
                    Edwin Carreño
                </div>
                <br />
                <div id="nombres">
                    Camilo Salgado
                </div>
                <br />
                <div id="nombres">
                    Jose Peñaloza
                </div>
                <br />
                <div id="nombres">
                    William Gonzalez
                </div>
                <br />
                <div id="nombres">
                    Richard Cortazar
                </div>
                <br />
                <div id="nombres">
                    Cristian LLanos
                </div>
                <br />
                <div>
                <Link href ="https://github.com/camilo95951/Parcial3_Back">
                   <Button variant="contained">Default</Button>
                </Link>
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
        </center></div>
    );
}

export default pres;
