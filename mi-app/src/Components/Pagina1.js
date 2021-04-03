


import React, { useContext} from 'react';
import { DataContex } from '../contex/DataContex'


export const Pagina1 = () => {
    const { data } = useContext( DataContex);
    return (
        <div>
          <h1> Pagina1 </h1> 
          <hr />  
        <pre>
            { JSON.stringify (data, null, 2 )}
        </pre>
        </div>
    )
}