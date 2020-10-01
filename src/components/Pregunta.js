import React, { Fragment, useState } from 'react';

import Error from './Error';

const Pregunta = () => {
    //TODO: DEFINIR EL STATEMENT

    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError] = useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
     const agregarPresupuesto = e => {
         e.preventDefault();

         //validar


         if(cantidad < 1 || isNaN(cantidad)){
             guardarError(true);
             return;
         }

         


         //si se pasa la validación

         guardarError(false);
         //TODO: VALIDAR UN PRESUPUESTO   
     }

     


    return(

      <Fragment>
          <h1>Coloca tú presupuesto</h1>


        { error ? <Error /> : null}

          <form  
               onSubmit={agregarPresupuesto}
          >
              <input 
                  type="number"
                  className="u-full-width"
                  placeholder="Coloca tú presupuesto"
                  onChange={ definirPresupuesto }
              />
              <input 

                  type="submit"
                  className="button-primary u-full-width"
                  value="Definir Presupuesto"            
                                                         
              />
          </form>
      </Fragment>
    );
}
export default Pregunta;

