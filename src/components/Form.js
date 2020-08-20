import React from "react";

console.log("hola");

class Form extends React.Component {
  render() {
    return (
        <div class="container">  
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
        {/* <div className="bannerForm">numero</div> */}
      </div>
      
    );
  }
}

export default  Form ;
