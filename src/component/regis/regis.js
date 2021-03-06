import './regis.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
  },
}));

function Regis(props) {
  const [textName, setTextName] = useState('');
  const [textLastName, setTextLastName] = useState('');
  const [textAge, setTextAge] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textPass, setTextPass] = useState('');
  const [textPass2, setTextPass2] = useState('');
  const [textCheck1, setTextCheck1] = useState(false);
  

  const clasess = useStyles();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!textCheck1) {
      window.alert('Debe seleccionar una opcion');
    } else {
      if (textPass !== textPass2) {
        window.alert('Los campos de contraseña deben ser iguales');
      } else {
        console.log(textName, textLastName, textAge, textEmail);
      }
         /* if (textAge < 0){
        window.alert('No puede tener edad negativa');
      }*/
    }
    

     axios.post('https://k16jzj2jrl.execute-api.us-east-2.amazonaws.com/dev/lib/user', {
      name: textName,
      lastName: textLastName,
      age: textAge,
      email: textEmail,
      pass: textPass,
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      
    });
    const {history, location } = props;
    const { from } = location.state || {
      from: {
        pathname: '/home',
      },
    };
    history.push(from);
  };

 


  

  const onChangeName = (event) => {
    setTextName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setTextLastName(event.target.value);
  };
  const onChangeAge = (event) => {
    setTextAge(event.target.value);
  };
  const onChangeEmail = (event) => {
    setTextEmail(event.target.value);
  };
  const onChangePass = (event) => {
    setTextPass(event.target.value);
  };
  const onChangePass2 = (event) => {
    setTextPass2(event.target.value);
  };
  const onChangeCheck1 = (event) => {
    setTextCheck1(event.target.value);
  };
  
  return (
    <div className="mainDiv"><center> 
      <Typography className="encabezado" id="nombres">
        Bienvenido
        <h1 className="textoencabezado"> Ingreso de datos para registro</h1>
        <input
          type="image"
          src="https://radcolombia.org/web/sites/default/files/archivos/instituciones/fundacion-universitaria-libertadores/logo-full.png"
          alt=""
          width="300"
          height="150"
        />
      </Typography>
      <form onSubmit={onSubmit} component="div" style={{ backgroundColor: '#fcfdff', height: '90vh', maxWidth:'60vh' }}>
        <Typography>
          <h2 className="Subsec">Datos Personales</h2>
        </Typography>
        <TextField
          type="text"
          className={clasess.root}
          id="name"
          label="Nombre"
          variant="outlined"
          required
          onChange={onChangeName}
        />
        <br />
        <TextField
          type="text"
          className={clasess.root}
          id="lastName"
          label="Apellido"
          variant="outlined"
          required
          onChange={onChangeLastName}
        />
        <br />
        <TextField
          type="number"
          className={clasess.root}
          id="age"
          label="Edad"
          variant="outlined"
          onChange={onChangeAge}
        />
        <br />
        <TextField
          type="email"
          className={clasess.root}
          id="email"
          label="Email"
          variant="outlined"
          required
          onChange={onChangeEmail}
        />
        <br />
        <TextField
          type="password"
          className={clasess.root}
          id="pass"
          label="Contraseña"
          secureTextEntry={true}
          variant="outlined"
          required
          onChange={onChangePass}
        />
        <br />
        <TextField
          type="password"
          className={clasess.root}
          id="pass"
          label="Confirmar Contraseña"
          secureTextEntry={true}
          variant="outlined"
          required
          onChange={onChangePass2}
        />

        <br />

        <Checkbox
          name="check1"
          onChange={onChangeCheck1}
          value="Acepto terminos y condiciones"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <label>Al Registrarse, Acepta los Terminos y Condiciones</label>

        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Registrar
        </Button>
        <label> </label>
        <label>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Cancelar
          </Button>
        </label>
      </form>
    </center></div>
  );
}

export default Regis;
