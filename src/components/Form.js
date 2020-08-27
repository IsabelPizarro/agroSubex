import React from "react";

console.log("hola");

class Form extends React.Component {
  render() {
    return (
        <div class="container mb-5">  
        <form id="contact" action="" method="post">
          <h3>Agrosubex</h3>
          <h4>Ponte en contacto con nosotros a través de este formulario</h4>
          <fieldset>
            <input placeholder="Nombre" type="text" tabindex="1" required autofocus/>
          </fieldset>
          <fieldset>
            <input placeholder="Correo electrónico" type="email" tabindex="2" required/>
          </fieldset>
          <fieldset>
            <input placeholder="Teléfono de contacto" type="tel" tabindex="3" required/>
          </fieldset>
        
          <fieldset>
            <textarea placeholder="Escribe tu mensaje aquí...." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
          </fieldset>
          <p class="copyright">¡Gracias por ponerte en contacto con nosotros!</p>
        </form>
        <div className="adress mb-5 mt-0" >
          <div className="pl-5 ml-5">
            Horario;<br/>
             9:00 -14:00<br/>
             17:00 -20:00<br/>
          </div>
          <div className="pl-5 ml-5 mb-5 pb-3">
          Telf. 691769065<br/>
          agrosubex@gmail.com<br/>
          Direcion:<br/>
          C/Luis Alvarez Lencero <br/>
          06011<br/>
          Oficina Nº 21<br/>
          Edificio Eurodom<br/>
          Badajoz<br/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default  Form ;
