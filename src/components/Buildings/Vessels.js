import React from "react";
import foto from "../../images/tipoA/a.jpg"
import fotoA from "../../images/tipoA/aa.jpg"
import fotoR from "../../images/tipoR/rrrr.jpg"
import fotoC from "../../images/tipoc/cc.jpg"
import Banner from "../shared/Banner"

console.log("hola");

class Vessels extends React.Component {
  render() {
    return (
    <div className="container builts m-5 p-5">
        <div className="build p-5 ">
            <div>
            <div>
                <h2 className="title py-5 ">TIPOS DE NAVES INDUSTRIALES Y AGRICOLAS</h2>
            </div>
            </div>

            <div className="container">
                {/* primera NAVE */}
            <div>
                <h3 className="navTitle">Nave tipo -C</h3>
            </div>
                <div className="row">
                <div className="col-sm align-items-center justify-content-center ">
                <div className="boder mt-5">
                        <img src={foto} alt="cow" className="img-fluid"></img>
                </div>
            </div>
            <div className="col-sm">
                <div className="pContainer py-5 px-3  font-weight-normal">
           



                        <p className="text-justify" >La NAVE TIPO- C está destinada al uso como almacén industrial en grandes superficies. Sus características son:</p>
                       
                        <ul className="list-group">
                        <li>•	Estructura prefabricada de hormigón en pórtico ó viga delta</li>
                        <li>•	Cubierta de panel sándwich en 3/6 cm de espesor con 10-20% de pendiente*</li>
                        <li>•	Cerramiento inferior en paneles de hormigón prefabricado gris claro (esp.20cms)</li>
                        <li>•	Cerramiento superior en panel sandwich ó Chapa Simple</li>
                        <li>•	Saneamiento de pluviales: Canalones dobles aislados de acero galvanizado+bajantes  PVC</li>
                        <li>•	Puertas seccionales según necesidades</li>
                        <li>•	Solera de hormigón armado HA.25 en 20cm  con armado 15.15.6 sobre encachado ZA</li>
                        <li>•	Vanos con intereje de 7-10m</li>
                        <li>•	Altura al alero: 6-12m</li>
                        <li>•	Oficinas y zonas administrativas según Usos</li>
                        </ul>
                    </div>
            </div>
        </div>

        {/* SEGUNDA NAVE */}
        <div>
                <h3 className="navTitle">Nave tipo -A</h3>
            </div>
            <div className="row">
            <div className="col-sm align-items-center justify-content-center ">
                <div className="boder mt-5">
                        <img src={fotoC} alt="cow" className="img-fluid"></img>
                </div>
            </div>

            <div className="col-sm">
                <div className="pContainer py-5 px-3  font-weight-normal">
                        <p className="text-justify">La NAVE TIPO- A está destinada al uso como almacén de productos a granel (grano, semillas). Sus características son:</p>
                       
                        <ul className="list-group">
                            <li>• Cubierta de panel sándwich en 3 cm de espesor con 20% de pendiente* </li>
                            <li>•	Cerramiento de fachada en chapa prelacada+lucernarios de Policarbonato* </li>
                            <li>•	Saneamiento de pluviales: Canalones de acero galvanizado + bajantes de PVC </li>
                            <li>•	1 Puerta corredera de chapa de  5,00 x 5,00m </li>
                            <li>•	Solera de hormigón armado HA.25 en 15cm  con armado 15.15.6 sobre encachado ZA </li>
                            <li>•	Vanos con intereje de 6m </li>
                            <li>•	Altura al alero: 6m </li>
                        </ul>
                    </div>
            </div>
        </div>

        {/* TERCERA Nave */}
        <div>
                <h3 className="navTitle">Nave tipo -R</h3>
            </div>
    <div className="row">
            <div className="col-sm align-items-center justify-content-center ">
                <div className="boder mt-5">
                    <img src={fotoR} alt="cow" className="img-fluid"></img>
                </div>
            </div>
            <div className="col-sm">
                <div className="pContainer py-5 px-3  font-weight-normal">
                        <p className="text-justify"> La NAVE TIPO- R está destinada al uso como espacios de trabajo, y/o procesos Industriales. Sus características son:</p>
                    
                        <ul className="list-group">
                            <li>•	Estructura prefabricada de hormigón en pórtico ó viga delta</li>
                            <li>•	Cubierta oculta de panel sándwich en 3/6 cm de espesor con 10-20% de pendiente*</li>
                            <li>•	Cerramiento en paneles de hormigón prefabricado (esp.20cms)</li>
                            <li>•	Saneamiento de pluviales: Canalones dobles aislados de acero galvanizado+bajantes  PVC</li>
                            <li>•	Puertas seccionales según necesidades</li>
                            <li>•	Solera de hormigón armado HA.25 en 20cm  con armado 15.15.6 sobre encachado ZA</li>
                            <li>•	Vanos con intereje de 7-10m</li>
                            <li>•	Altura al alero: 6-12m</li>
                            <li>•	Oficinas y zonas administrativas según Usos</li>
                        </ul>
                    </div>
            </div>
        </div>

        {/* CUARTA NAVE */}
        <div>
                <h3 className="navTitle ">Nave tipo -H</h3>
            </div>
            <div className="row">
    <div className="col-sm align-items-center justify-content-center ">
        <div className="boder mt-5">
      <img src={fotoA} alt="cow" className="img-fluid"></img>
      </div>
    </div>
            <div className="col-sm">
                <div className="pContainer py-5 px-3  font-weight-normal">
                        <p className="text-justify"> La NAVE TIPO- H está destinada al uso  como almacén de maquinaria/objetos y espacio de trabajo. Sus características son:</p>
                        <ul className="list-group">
                       
                        <li>•	Estructura prefabricada de hormigón </li>
                        <li>•	Cubierta de panel sándwich en 3 cm de espesor con 20% de pendiente*</li>
                        <li>•	Cerramiento en paneles de hormigón prefabricado gris claro (esp.20cms)</li>
                        <li>•	Saneamiento de pluviales: Canalones de acero galvanizado + bajantes de PVC</li>
                        <li>•	1 Puerta corredera de chapa de  5,00 x 5,00m</li>
                        <li>•	Solera de hormigón armado HA.25 en 15cm  con armado 15.15.6 sobre encachado ZA</li>
                        <li>•	Vanos con intereje de 6m</li>
                        <li>•	Altura al alero: 6m</li>
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

export default Vessels;