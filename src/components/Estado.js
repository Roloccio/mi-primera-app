import React, { Component } from "react";

//un componente se repinta si se cambia el estado, luego en el estado se debe de almacenar lo que quiero cambiar dinamicamente.
//El estado en una clase se hace con this.state y es un objeto inmutable. solo se puede modificar con un metodo especial llamado setState()
//El estado esta en la variable state, la modificacion se haria a traves del metodo setState
export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Componente Estado</h1>
        <h2>{this.setState({ contador: (this.state.contador += 1) })}</h2>
      </>
    );
  }
}
