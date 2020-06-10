/* eslint-disable react-hooks/rules-of-hooks */
import './mod.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function mod() {
    // eslint-disable-next-line no-unused-vars
    const [textValue, setTextValue] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [statusFlag, setStatusFlag] = useState(false);

    useEffect(()=> {
        if (!statusFlag){
            axios.get('https://k16jzj2jrl.execute-api.us-east-2.amazonaws.com/dev/lib/user'
            ).then((response)=> {
            console.log(response);
            setUserData(response);
            setStatusFlag(true);
        })
        .catch((error)=> {});
        }
        
    });

    const mdData = (params) => {
        // eslint-disable-next-line no-lone-blocks
        
        return (
          <div><center>
            <h3>{"Actualización de datos"}</h3>     
            <br />  
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Edad</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                {userData === null
                  ? null
                  : userData.data.map((val) => (
                      <tr key={val.userid}>
                        <td>{val.userid}</td>
                        <td>{val.name}</td>
                        <td>{val.lastname}</td>
                        <td>{val.age}</td>
                        <td>{val.email}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </center></div>
      ); 
           
    };
        

/*
    //const arr =['richard', 'alexander'];
    return (
        <div>
            <h1>{'Usuarios registrados'}</h1>
            {userData === null ? null : vsData()}
        </div>
    );
    */






    return (
        <div>
            <h1 className="encabezado"> {'Pagina de modificacion'} </h1>
            {userData === null ? null : mdData()}
        </div>
    );
    
}

export default mod;
