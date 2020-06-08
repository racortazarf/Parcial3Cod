import './visual.css';
import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';

function visual() {
    const useState = props => {
    const [textValue, setTextValue] = useState('');
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        axios.get('http://localhost:8080/user').then((response)=> {
            console.log(response);
        })
        .catch((error)=> {});
    });

    const onChangeTextFiled1 = (event) =>{
        console.log(event.target.value);
        //setTextValue(event.target.value)/;
    }

    const arr =['richard', 'alexander'];
    return (
        <div>
            <h1>{'Pagina de visualizacion'}</h1>
            <TextField onChange = {onChangeTextFiled1}/>
            {arr.map((val) => ( 
            <p key = {Math.floor(Math.random() * 1000)}>{val}</p>
            ))}
        </div>
    );
}

export default visual;
