import React , { Component } from "react";

/*Hay dos formas de crear un componente:
-component de clase.
-componente de funcion.
*/
//Componente de clases

/*class Componente extends Component {
    render () {
        return <h1> Mi primer componente </h1>;
    }
}

export default Componente;*/
//componente funcional

function Componente() {
    return <h1> Mi primer componente funcional </h1>
  }
export default Componente;
/* const Componente = (props) => <h1> Mi primer componente {props.nombre}</h1>  */

/* class Componente extends Component {
        constructor
}   {props.meses.map((mes,index) =>(<li key = {index}>{mes}</li>))}*/