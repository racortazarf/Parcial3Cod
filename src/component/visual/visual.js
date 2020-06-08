import './visual.css';

  
import React, { useEffect,} from 'react';

import axios from 'axios';

function visual() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        axios.get('http://localhost:8080/user').then((response)=> {
            console.log(response);
        })
        .catch((error)=> {});
    });

    //const arr =['richard', 'alexander'];
    return (
        <div>
            <h1>{'Pagina de visualizacion'}</h1>
        </div>
    );
}

export default visual;
