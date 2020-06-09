import './visual.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';


function visual() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [textValue, setTextValue] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [statusFlag, setStatusFlag] = useState(false);
    
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        if (!statusFlag){
            axios.get('http://localhost:8080/user'
            ).then((response)=> {
            console.log(response);
            setUserData(response);
            setStatusFlag(true);
        })
        .catch((error)=> {});
        }
        
    });

    const vsData = (params) => {
        // eslint-disable-next-line no-lone-blocks
        
        return (
          <div><center> 
            <h3 id="nombres"><center> {"Lista de personal"} </center></h3>     
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
        


    //const arr =['richard', 'alexander'];
    return (
        <div>
            <h1 className="encabezado"> {'Usuarios registrados'} </h1>
            {userData === null ? null : vsData()}
        </div>
    );
}

export default visual;
