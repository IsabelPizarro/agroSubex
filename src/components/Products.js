import React from "react";
import pulpaDeNaranja from "../images/productos/pulpaDeNaranja.JPG"
import boniatoDedestrio from "../images/productos/boniatoDedestrio.JPG"
import destrioDeMaizDulce from "../images/productos/destrioDeMaizDulce.jpg"
import pulpaDeTomate from "../images/productos/pulpaDeTomate.jpg"
import detrioDePatata from "../images/productos/detrioDePatata.jpg"
import pulpaDeRemolachaPrensada from "../images/productos/pulpaDeRemolachaPrensada.JPG"



class Products extends React.Component {
  render() {
    return (
          <div  className="container-fluid pt-5 mt-5">
            <h1 mt-5>Nuestros productos.</h1>
            <div className="d-flex justify-content-center flex-wrap">
            
              
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={pulpaDeTomate}/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Pulpa de tomate<i class="material-icons right">+</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Que és<i class="material-icons right">x</i></span>
                                  <p>Es un pienso para estimular la producción lechera y cárnica del ganado
                A partir del tomate industrial se obtiene la pulpa que, tras ser sometida a un proceso de prensado, se comercializa como pienso para ganado.

                Una vez prensada alcanza un contenido en materia seca superior al 27%, que puede consumirse como producto fresco o bien conservarse ensilada durante meses.

                Dadas sus propiedades podemos considerarlo de los productos con mejor conservación y durabilidad.

                La pulpa de tomate es una fuente energética y proteica intermedio.</p>
                </div>
              </div>
             
            
              <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={detrioDePatata}/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Patatas de destríos<i class="material-icons right">+</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">¿Qué es?<i class="material-icons right">close</i></span>
                  <p>El destrío de patata está formado por patatas enteras y partidas provenientes de la industria patatera, no válida para el consumo humano por razones de calibre o desperfectos. El destrío de patatas es de los subproductos con más aporte en almidón, ya que tiene (entre un 60-80%) convirtiéndolo así en un alimento muy energético. Presenta también contenidos en proteína y fibra, siendo una buena fuente potasio. Subproducto muy apetecible para todo tipo de ganado.</p>
                </div>
              </div>
             
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={pulpaDeRemolachaPrensada}/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Pulpa de remolacha prensada<i class="material-icons right">+</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">¿Qué es?<i class="material-icons right">x</i></span>
                  <p>Es un pienso para estimular la producción lechera del ganado
                    A partir de la remolacha azucarera se obtiene la pulpa que, tras ser sometida a un proceso de prensado, se comercializa como pienso para ganado.

                    Una vez prensada alcanza un contenido en materia seca superior al 27%, que puede consumirse como producto fresco o bien conservarse ensilada durante meses.</p>
                </div>
              </div>
             
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={destrioDeMaizDulce}/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Maíz dulce de destrío<i class="material-icons right">+</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">¿Qué es?<i class="material-icons right">x</i></span>
                  <p>El destrío de maíz dulce procede de las industrias dedicadas al envase de mazorcas de maíz fresco para consumo humano. El cual está formado por hojas y mazorcas enteras y partidas sin triturar. Presenta un elevado contenido en fibra y cierta cantidad de proteína y grasa. Es un subproducto equilibrado, se recomienda para rumiantes.</p>
                </div>
              </div>
            
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={pulpaDeNaranja}/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Pulpa de naranja<i class="material-icons right">+</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">¿Qué es?<i class="material-icons right">x</i></span>
                  <p>Es un pienso para estimular la producción y mantenimiento del ganado.
                    La pulpa de naranja es el subproducto de la industria de zumos cítricos. Esta constituido por la piel, las semillas, la pulpa y frutos de desecho. Puede utilizarse en forma fresca, ensilada o deshidratada. su principal utilización es en dietas y piensos para rumiantes de alta producción, donde su valor nutritivo es similar al del grano de cebada.</p>
                </div>
              </div>
            
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={boniatoDedestrio}/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Boniato de destrío<i class="material-icons right">+</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Qué es<i class="material-icons right">x</i></span>
                  <p>El destrío de boniato está formado por boniatos enteros y partidos provenientes de la industria, no válido para el consumo humano por razones de calibre o desperfectos. El destrío de boniatos es de los subproductos con más aporte en almidón, ya que tiene (entre un 60-80%) convirtiéndolo así en un alimento muy energético y muy rico en minerales. Presenta también contenidos en proteína y fibra, siendo una buena fuente potasio.
                    Subproducto muy apetecible para todo tipo de ganado, debido a sus azucares libres.</p>
                </div>
              </div>
        
              </div>

      
    </div>
      )  }
}

export default Products;