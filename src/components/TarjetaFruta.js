//import React , { Component } from "react";
import React , { useState } from "react";
/*
class TarjetaFruta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 0,
        };
        //bindeo o binding sobre los metodos que el this pierde el contexto de clase
        this.agregar = this.agregar.bind(this);
        this.quitar = this.quitar.bind(this);
        this.limpiar = this.limpiar.bind(this);
    }
    agregar(){
        this.setState({cantidad : this.state.cantidad + 1})
    };
    quitar(){
        this.state.cantidad >0 ? this.setState({ cantidad: this.state.cantidad -1}) : this.setState({ cantidad: this.state.cantidad})
    }
    limpiar(){
        this.setState({ cantidad : 0})
    }

    render(){
        return(
            <div>
                <h3>{this.props.nombreFruta}</h3>
                <div>🛒 Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>✔</button>
                <button onClick={this.quitar}>-❌</button>
                <button onClick={this.limpiar}>🗑</button>
                <hr/>
                <p>{this.props.precio}💰</p>
            </div>
        );
    }
    
}*/

//version mas moderna
//Property Initialiters != HOOK
//Gracias a importar con create-react-app BABEL
//y lo configura con unas caracteristicas aceptadas por la comunidad, pero no son un estandar de programacion
/*
class TarjetaFruta extends Component {
    //no hay constructor
    state = {
        cantidad:0,
    }
    agregar = () => {
        this.setState({cantidad : this.state.cantidad + 1})
    };
}
*/

//USO de HOOKS (componente FUNCIONAL)

const TarjetaFruta = (props) => {
    //como asignamos estado en un componente FUNCIONAL
    const [cantidad, setCantidad] = useState(0);
    function agregar (){
        return setCantidad(cantidad+1);
    }
    function quitar (){
        return cantidad >0 ? setCantidad(cantidad-1) : cantidad;
    }
    function limpiar() {
        return setCantidad(0);
    }
    return(
        <div>
            <h3>{props.nombreFruta}</h3>
            <div>🛒 Cantidad: {cantidad}</div>
            <button onClick={agregar}>✔</button>
            <button onClick={quitar}>-❌</button>
            <button onClick={limpiar}>🗑</button>
            <hr/>
            <p>{props.precio}💰</p>
        </div>
    );
}
export default TarjetaFruta;