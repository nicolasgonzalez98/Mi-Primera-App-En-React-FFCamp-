import React from "react";
import '../styles/Testimonios.css'

export default function Testimonios(prop){
    return(
        <div className="card">
            <img className="imagen" src={require(`../imagenes/${prop.foto}.png`)} alt={prop.name}/>
            <div className="derecha">
                <p className="titulo"><strong>{prop.name}</strong> in {prop.country}</p>
                <p className="titulo">Software Engineer at <strong>{prop.enterprise}</strong></p>
                <p className="testimonio">"{prop.opinion}"</p>
            </div>
        </div>
    )
}