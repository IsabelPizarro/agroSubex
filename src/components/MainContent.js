import React from "react";


class MainContent extends React.Component {
  render() {
    return (
  <div className="HomeContainer mb-5">
      <div className="mainContainer">
      </div>
    <div className="m-5 pb-5">
        <div className="banner">
            <div class="row">
              <div class="col s12">
                 <h2  className="bannerTitle pt-0 mt-0 mb-1">En constante investigación</h2></div>
            </div>
            <div class="row">
                <div class="col s6">
                  <div className="buscando pt-3">
                    Buscando nuevas alternativas <br/> para el mundo rural
                  </div>
                </div>
                <div class="col s6">
                    <div className="buscando pl-1">
                      <p>- Productos rentables</p>
                      <p>- Nutrólogos a su servicio</p>
                      <p>- Reciclando subproductos</p>
                    </div>
                </div>
        </div>
    </div>
      {/* <div className="banner">
          <h2  className="bannerTitle pt-0 mt-0 mb-1">En constante investigación</h2>
          <div className="d-flex justify-content-around">
          <div className="buscando esconder pt-3">
            Buscando nuevas alternativas <br/> para el mundo rural
          </div>
          <div className="buscando pl-1">
            <p>- Productos rentables</p>
            <p>- Nutrólogos a su servicio</p>
            <p>- Reciclando subproductos</p>
          </div>
          </div>

        </div> */}
      </div>
</div>
      
    );
  }
}

export default  MainContent;
