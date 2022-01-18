import React , { useState } from "react";
import "./ImagenesAleatorias.css"

const ImagenesAleatorias = (props) => {
    //partefuncional de mi componente
    const[enabled, setEnabled] = useState(true);


    //parte de pintado
    return (
        <picture className = "picture">
            <img src = "https://randomuser.me/api/portraits/women/2.jpg" alt="woman" className = "img" />
            <h3>{props.nombre}</h3>
        </picture>
    );
};
export default ImagenesAleatorias;