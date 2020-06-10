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
                    Camilo Salgado
                </div>
                <br />
                <div id="nombres">
                    Edwin Carreño
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
                <a href="https://github.com/racortazarf/Parcial3Cod" target="_blank">
                 <Button id="botonrepo" >Repositorio Front-end</Button>
                </a>
                <br/>
                <a href="https://github.com/camilo95951/Parcial3_Back" target="_blank">
                 <Button id="botonrepo">Repositorio Back-end</Button>
                </a>
        </div>
                <br />
            </p>
        </center></div>
    );
    
}

export default pres;
