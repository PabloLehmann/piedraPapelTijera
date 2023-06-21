// Iniciar juego
// Elegir ataque de los jugadores
// Mostrar resultado


let contador = 0;
let contadorEnemigo = 0;

function piedra() {
  document.getElementById("eleccion").innerHTML = `
                                                    <div class="  p-2 m-3 text-center animate__animated animate__backInLeft">
                                                        <H5>Tu elegiste piedra <br><img src="./assets/piedra.png" class="img-fluid imagenJuego" alt="..."></H5>

                                                    </div>
                                                `;
  let valor = 0;
  let enemigo = Math.round(Math.random() * 2);

  if (enemigo == 0) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                              <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                                                                                      
                                                              <H5>El eligió <br>piedra<br><img src="./assets/piedraEne.png" class="img-fluid imagenJuego" alt="..."></H5>



                                                              </div>
                                                        `;
  } else if (enemigo == 1) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                              <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                                                                                      
                                                              <H5>El eligió <br>papel<br><img src="./assets/papelEne.png" class="img-fluid imagenJuego" alt="..."></H5>



                                                            </div>
                                                        `;
  } else if (enemigo == 2) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                             <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                                                                                              
                                                              <H5>El eligió <br>tijera<br><img src="./assets/tijeraEne.png" class="img-fluid imagenJuego" alt="..."></H5>



                                                            </div>
                                                        `;
  }

  setTimeout(function () {
    if (enemigo == valor) {
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2 class="animate__animated animate__animated animate__zoomOutUp">Empataron</h2>`;
    } else if (valor == 0 && enemigo == 2) {
      contador = contador + 1;
      document.getElementById("contador").innerHTML = `${contador}`;

      document.getElementById("resultado").innerHTML = `
                                                        <div class="   text-center animate__animated animate__heartBeat ">
                                                            <H1>GANASTE</H1>
        
                                                        </div>
                                                                `;
    } else {
      contadorEnemigo = contadorEnemigo + 1;
      document.getElementById(
        "contadorEnemigo"
      ).innerHTML = `${contadorEnemigo}`;
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2 class="animate__animated animate__animated animate__rotateOut">Perdiste</h2>`;
      return contadorEnemigo;
    }
  }, 1000);
}

function papel() {
  document.getElementById("eleccion").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInLeft">
                                                            <H5>Tu elegiste papel<br><img src="./assets/papel.png" class="img-fluid imagenJuego" alt="..."></H5>

                                                        </div>
                                                    `;

  let valor = 1;
  let enemigo = Math.round(Math.random() * 2);

  if (enemigo == 0) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            
                                                            <H5>El eligió <br>piedra<br><img src="./assets/piedraEne.png" class="img-fluid imagenJuego" alt="..."></H5>



                                                        </div>
                                                    `;
  } else if (enemigo == 1) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            
                                                            <H5>El eligió<br> papel<br><img src="./assets/papelEne.png" class="img-fluid imagenJuego" alt="..."></H5>


                                                        </div>
                                                    `;
  } else if (enemigo == 2) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            
                                                            <H5>El eligió<br> tijera<br><img src="./assets/tijeraEne.png" class="img-fluid imagenJuego" alt="..."></H5>


                                                        </div>
                                                    `;
  }
  setTimeout(function () {
    if (enemigo == valor) {
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2 class="animate__animated animate__animated animate__zoomOutUp">Empataron</h2>`;
    } else if (valor == 1 && enemigo == 0) {
      contador = contador + 1;
      document.getElementById("contador").innerHTML = `${contador}`;
      document.getElementById("resultado").innerHTML = `
                                                        <div class="  text-center wow animate__heartBeat">
                                                        
                                                            <H1>GANASTE</H1>
                                                        </div>
                                                    `;
    } else {
      contadorEnemigo = contadorEnemigo + 1;
      document.getElementById(
        "contadorEnemigo"
      ).innerHTML = `${contadorEnemigo}`;
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2 class="animate__animated animate__animated animate__rotateOut">Perdiste</h2>`;
    }
  }, 1000);
}

function tijera() {
  document.getElementById("eleccion").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInLeft">
                                                            <H5>Tu elegiste tijera<br> <img src="./assets/tijera.png" class="img-fluid imagenJuego" alt="..."></H5>

                                                        </div>
                                                    `;

  let valor = 2;
  let enemigo = Math.round(Math.random() * 2);

  if (enemigo == 0) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            
                                                            <H5>El<br> eligió piedra<br><img src="./assets/piedraEne.png" class="img-fluid imagenJuego" alt="..."></H5>


                                                        </div>
                                                    `;
  } else if (enemigo == 1) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            
                                                            <H5>El eligió<br> papel<br><img src="./assets/papelEne.png" class="img-fluid imagenJuego" alt="..."></H5>


                                                        </div>
                                                    `;
  } else if (enemigo == 2) {
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            
                                                            <H5>El eligió<br> tijera<br><img src="./assets/tijeraEne.png" class="img-fluid imagenJuego" alt="..."></H5>


                                                        </div>
                                                    `;
  }
  setTimeout(function () {
    if (enemigo == valor) {
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2 class="animate__animated animate__animated animate__zoomOutUp">Empataron</h2>`;
    } else if (valor == 2 && enemigo == 1) {
      contador = contador + 1;
      document.getElementById("contador").innerHTML = `${contador}`;

      document.getElementById("resultado").innerHTML = `
                                                        <div class="text-center wow animate__heartBeatk">
                                                            <H1>GANASTE</H1>

                                                        </div>
                                                                `;
    } else {
      contadorEnemigo = contadorEnemigo + 1;
      document.getElementById(
        "contadorEnemigo"
      ).innerHTML = `${contadorEnemigo}`;
      document.getElementById(
        "resultado"
      ).innerHTML = `<h2 class="animate__animated animate__animated animate__rotateOut">Perdiste</h2>`;
    }
  }, 1000);
}

let juego = 0;

document.getElementById("piedra").onclick = function () {
  juego = juego + 1;
  const button = document.querySelector('#boton');
  document.getElementById("finDeJuego").innerHTML = `${juego}`;
  setTimeout(() => {
    if (juego == 3) {
      button.click();
      document.getElementById("prueba").innerHTML = `
      
                                                        <div class="">
                                                            <h4>¿Quién ganó?</h4> <br> 
                                                            <h3> Jugador: ${contador}</h3>
                                                            <h3>Maquina: ${contadorEnemigo}</h3>
                                                        </div>`;
    }
  }, 2000);

  piedra();
};
document.getElementById("papel").onclick = function () {
  juego = juego + 1;
  const button = document.querySelector('#boton');
  document.getElementById("finDeJuego").innerHTML = `${juego}`;
  setTimeout(() => {
    if (juego == 3) {
      button.click();
      document.getElementById("prueba").innerHTML = ` 
                                                <div>
                                                      <h4>¿Quién ganó?</h4> <br> 
                                                      <h3> Jugador: ${contador}</h3>
                                                      <h3>Maquina: ${contadorEnemigo}</h3>
                                                </div>`;
    }
  }, 2000);
  papel();
};
document.getElementById("tijera").onclick = function () {
  juego = juego + 1;
  const button = document.querySelector('#boton');
  document.getElementById("finDeJuego").innerHTML = `${juego}`;
  setTimeout(() => {
    if (juego == 3) {
      button.click();
      document.getElementById("prueba").innerHTML = ` <div>
                                                            <h4>¿Quién ganó?</h4> <br> 
                                                            <h3> Jugador: ${contador}</h3>
                                                            <h3>Maquina: ${contadorEnemigo}</h3>
                                                      </div>`;
    }
  }, 2000);
  tijera();
};

