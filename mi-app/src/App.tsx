


import { Counter } from './Components/Counter';
import { Usuario } from './Components/Usuario';
import { TimerPadre } from './Components/TimerPadre';
import { ContadorRed } from './Components/ContadorRed';
import { Formulario } from './Components/Formulario';
import { Formulario2 } from './Components/Formulario2';

import { DataProvider } from './contex/DataContex';

import { Pagina1 } from './Components/Pagina1';
import { Pagina2 } from './Components/Pagina2';
import { BotonCambiarData } from './Components/BotonCambiarData';
import React from 'react';


function App() {
  return (
    <>
    <h1> React + TypeScript </h1>
    <hr/> 

    <h2> UseState</h2>

       <Counter/>

      <Usuario />

      <h2> useEffect- useRef</h2>
      <hr/> 

     <TimerPadre/>

     <h2>useReducer</h2>
     <hr/>
     <ContadorRed/>

     <h2>customHoks</h2>
     <hr/>
     <Formulario />

     <br/>
     <Formulario2 />
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>

     < h2 > Reaccionar: Context Api </h2>
     <hr/>
 
     <DataProvider> 
     <div className="container">

     <Pagina1 />
     <br/>
     <Pagina2 />

     <br/>
        <BotonCambiarData />
        </div>
        </DataProvider>
     

   </>
  );
}

export default App;
