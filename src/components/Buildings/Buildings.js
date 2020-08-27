import React from "react";
import foto from "../../images/green.jpg"

console.log("hola");

class Buildings extends React.Component {
  render() {
    return (
      <div className="container builts m-5 p-5">
      <div className="build p-5">
          <div>
          <div>
              <h2 className="title py-5 ">DIRECCIÓN DE OBRAS  -  COORDINACION DE INSDUSTRIALES</h2>
          </div>
          <div>
              <h3 className="navTitle">Seguimiento y dirección para la ejecución del proyecto, hasta la finalización de la obra..</h3>
          </div>
          </div>

          <div className="container">
<div className="row">
  <div className="col-sm">
      <div className="pContainer py-5 px-3  font-weight-normal">
              <p className="text-justify"> En Agrosubex somos profesionales en la construcción de naves tanto para uso industrial como para uso agrícola proporcionando un servicio LLAVE EN MANO haciéndonos cargo de todas las fases y etapas del proyecto, aportando los recursos materiales y humanos necesarios no teniéndose que preocupar el cliente de nada. (movimiento de tierras, cimentación, construcción de estructura, cubiertas, aislamientos, ventilación, puertas, portones, ventanas, etc…)</p>
              <p className="text-justify">Para la mayor conformidad del cliente nos encargamos de llevar a cabo procesos como:</p>
              <ul className="list-group">
                  <li>•	Realización de planning de obra, reuniones periódicas con los industriales en obra, para el seguimiento de la ejecución de la misma. </li>
                  <li>•	Control de los tiempos para finalización de la obra en los plazos acordados.</li>
                  <li>•	Control de materiales y pedidos.</li>
                  <li>•	Control de la documentación Apertura de Centro de trabajo, Libro de subcontratación, y licencias.</li>
                  <li>•	Comunicación y coordinación con el cliente, de los acabados de proyecto acordados.</li>
              </ul>
          </div>
  </div>
  <div className="col-sm align-items-center justify-content-center ">
      <div className="boder mt-5">
    <img src={foto} alt="cow" className="img-fluid"></img>
    </div>
  </div>
</div>
</div>
      
      </div>
     </div>


      
    );
  }
}

export default Buildings;