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
            axios.get('http://localhost:8080/user').then((response)=> {
            console.log(response);
            setUserData(response);
            setStatusFlag(true);
        })
        .catch((error)=> {});
        }
        
    });

    const vsData = (params) => {
        // eslint-disable-next-line no-lone-blocks
        
          return(
            <div>
              {userData.data.map((val) =>  (
                <p key = {val.userid}>{JSON.stringify(val)}</p>
              ))}
            </div>
           );
           
    };
        
    //const arr =['richard', 'alexander'];
    return (
        <div>
            <h1>{'Usuarios registrados'}</h1>
            {userData === null ? null : vsData()}
        </div>
    );
}

export default visual;
