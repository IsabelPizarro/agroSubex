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
                <h2 className="title py-5 ">SERVICIOS TECNICOS - TRAMITES LEGALES</h2>
            </div>
            <div>
                <h3 className="navTitle ">Gestión y tramitación de la documentación para la legalización de los proyectos que realizamos.</h3>
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
                <p className="text-justify">La realización de nuestros proyectos requiere de la elaboración de un proyecto técnico, al igual que varios tipos de permisos expedidos por las autoridades y organismos competentes en el asunto.</p>
                <p className="text-justify">Todo este proceso demanda de gran conocimiento legislativo y experiencia en el ámbito de construcciones industriales y agricolas, por eso desde Agrosubex te facilitamos todos nuestros recursos en el ámbito legal (tramites de licencias, servicios de gestión y legalizaciones) para que el cliente se sienta lo mas cómodo posible a la hora de trabajar con nosotros.</p>
             
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