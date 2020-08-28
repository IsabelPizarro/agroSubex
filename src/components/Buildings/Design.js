import React from "react";
import foto from "../../images/DISEÑO CONCEPTUAL – PROYECTO TECNICO.webp"

console.log("hola");

class Design extends React.Component {
  render() {
    return (
    <div className="container builts m-5 p-5">
        <div className="build p-5 ">
            <div>
            <div>
                <h2 className="title py-5 ">DISEÑO CONCEPTUAL - PROYECTO TECNICO</h2>
            </div>
            <div>
                <h3 className="navTitle ">Realizamos proyectos y asesoramiento para la definición del proyecto y realización de presupuestos.</h3>
            </div>
            </div>

            <div className="container">
  <div className="row">
 
    <div className="col-sm align-items-center justify-content-center ">
        <div className="boder mt-5">
      <img src={foto} alt="cow" className="img-fluid"></img>
      </div>
    </div>
    <div className="col-sm">
        <div className="pContainer py-5 px-3  font-weight-normal">
                <p className="text-justify">Desde Agrosubex asesoramos al cliente en todas las etapas del proyecto general.</p>
                <p className="text-justify">Nos aseguramos de que la idea del cliente se vea reflejada en las opciones que le presentamos cuando este nos trae su idea principal, para ello:</p>
                <ul className="list-group">
                    <li>• Valoramos la viabilidad técnica del proyecto </li>
                    <li>• Realizamos planos de proyecto en planta de distribución, instalaciones, techos, alzados y perspectivas del proyecto</li>
                    <li>• Disponemos del proyecto virtual en imágenes 3D para que el cliente se sienta lo mas seguro a la hora de decidir realizarlo.</li>
                </ul>
            </div>
    </div>
  </div>
</div>
        
        </div>
       </div>

      
    );
  }
}

export default Design;