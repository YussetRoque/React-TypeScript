 
 import React from 'react';

 import { Pagina1 } from './Components/Pagina1';
 import { Pagina2 } from './Components/Pagina2';
 import { BotonCambiarData } from './Components/BotonCambiarData';

  function App(){

    const data = {
        nombre: 'Julia',
        edad: 25
    }
      return ( 
          <div className="container">
          <Pagina1 data={ data } />
          <Pagina2 />
          <BotonCambiarData />
      <h1> Hola Mundo</h1>
        </div>
);
}
export default App;
  