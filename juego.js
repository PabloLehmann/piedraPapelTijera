

// Iniciar juego

/* alert ("Comienza el juego")
alert ("Elige tu ataque")

// Elegir ataque de los jugadores

let jugador = prompt ("Elige 0 para piedra, 1 para papel, 2 para tijera")

if (jugador == 0){
    alert ("elegiste piedra")
} else if(jugador == 1){
    alert ("Elegiste papel")
}else if(jugador == 2){
    alert("Elegiste tijera")
}
else{
    alert("No has elegido nada")
}

// Elegir ataque del enemigo (aleatorio)

let enemigo = Math.round(Math.random() *2) 

if (enemigo == 0){
    alert ("El enemigo elegio  piedra")
} else if(enemigo == 1){
    alert ("El enemigo Elegio papel")
}else if(enemigo == 2){
    alert("El enemigo Elegio tijera")
}


// Mostrar resultado

if (enemigo == jugador){
    alert("Hubo empate")
}else if (jugador == 0 && enemigo == 2){
    alert("GANASTE")
}else if (jugador == 1 && enemigo == 0){
    alert("GANASTE")
}else if (jugador == 2 && enemigo == 1){
    alert("GANASTE")
}else{
    alert("Perdiste")
} */

// funciones
/* if (contador == 3 || contadorEnemigo == 3){
    document.getElementById("finDeJuego") = "<h1>chau</h1>"
}else{ */

let contador = 0;
let contadorEnemigo = 0;


function piedra(){
    
    document.getElementById("eleccion").innerHTML = `
                                                    <div class="  p-2 m-3 text-center animate__animated animate__backInLeft">
                                                        <H3>Elegiste piedra</H3>

                                                    </div>
                                                `;
    let valor = 0
    let enemigo = Math.round(Math.random() *2) 

if (enemigo == 0){
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                            <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                                <H3>El enemigo eligió piedra</H3>

                                                            </div>
                                                        `;
} else if(enemigo == 1){
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                            <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                                <H3>El enemigo eligió papél</H3>

                                                            </div>
                                                        `;
}else if(enemigo == 2){
    document.getElementById("eleccionEnemigo").innerHTML = `
                                                            <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                                <H3>El enemigo eligió tijera</H3>

                                                            </div>
                                                        `;
}
    
setTimeout(function() {
    
if (enemigo == valor){
    document.getElementById("resultado").innerHTML = `<h2 class="animate__animated animate__animated animate__zoomOutUp">Empataron</h2>`;
    
}else if (valor == 0 && enemigo == 2){
    contador = contador + 1
    document.getElementById("contador").innerHTML = `${contador}`;    
    
    document.getElementById("resultado").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__heartBeat border border-4 border-black">
                                                            <H1>GANASTE</H1>
        
                                                        </div>
                                                                `;
    
}else{
    contadorEnemigo = contadorEnemigo + 1
    document.getElementById("contadorEnemigo").innerHTML = `${contadorEnemigo}`;
    document.getElementById("resultado").innerHTML =  `<h2 class="animate__animated animate__animated animate__rotateOut">Perdiste</h2>`;
    return contadorEnemigo
}
        }, 1000);
}


function papel(){
    document.getElementById("eleccion").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInLeft">
                                                            <H3>Elegiste papel</H3>

                                                        </div>
                                                    `;

    let valor = 1
    let enemigo = Math.round(Math.random() *2) 

if (enemigo == 0){
    document.getElementById("eleccionEnemigo").innerHTML =  `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            <H3>El enemigo eligió piedra</H3>

                                                        </div>
                                                    `;
} else if(enemigo == 1){
    document.getElementById("eleccionEnemigo").innerHTML =  `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            <H3>El enemigo eligió papel</H3>

                                                        </div>
                                                    `;
}else if(enemigo == 2){
    document.getElementById("eleccionEnemigo").innerHTML =  `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            <H3>El enemigo eligió tijera</H3>

                                                        </div>
                                                    `;
}
setTimeout(function() {
if (enemigo == valor){
    document.getElementById("resultado").innerHTML = `<h2 class="animate__animated animate__animated animate__zoomOutUp">Empataron</h2>`;
    
}else if (valor == 1 && enemigo == 0){
    contador = contador + 1
    document.getElementById("contador").innerHTML = `${contador}`;    
    document.getElementById("resultado").innerHTML = `
                                                        <div class="  p-2 m-3 text-center wow animate__heartBeat border border-4 border-black">
                                                        
                                                            <H1>GANASTE</H1>
                                                        </div>
                                                    `;
}else{
    contadorEnemigo = contadorEnemigo + 1
    document.getElementById("contadorEnemigo").innerHTML = `${contadorEnemigo}`;
    document.getElementById("resultado").innerHTML = `<h2 class="animate__animated animate__animated animate__rotateOut">Perdiste</h2>`;
}
}, 1000);
}




function tijera(){
    document.getElementById("eleccion").innerHTML = `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInLeft">
                                                            <H3>Elegiste tijera</H3>

                                                        </div>
                                                    `;

    let valor = 2
    let enemigo = Math.round(Math.random() *2) 

if (enemigo == 0){
    document.getElementById("eleccionEnemigo").innerHTML =  `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            <H3>El enemigo eligió piedra</H3>

                                                        </div>
                                                    `;
} else if(enemigo == 1){
    document.getElementById("eleccionEnemigo").innerHTML =  `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            <H3>El enemigo eligió papel</H3>

                                                        </div>
                                                    `;
}else if(enemigo == 2){
    document.getElementById("eleccionEnemigo").innerHTML =  `
                                                        <div class="  p-2 m-3 text-center animate__animated animate__backInRight">
                                                            <H3>El enemigo eligió tijera</H3>

                                                        </div>
                                                    `;
}
setTimeout(function() {
    
if (enemigo == valor){
    document.getElementById("resultado").innerHTML = `<h2 class="animate__animated animate__animated animate__zoomOutUp">Empataron</h2>`;
    
}else if (valor == 2 && enemigo == 1){
    contador = contador + 1
    document.getElementById("contador").innerHTML = `${contador}`;    
   
    document.getElementById("resultado").innerHTML = `
                                                        <div class="  p-2 m-3 text-center wow animate__heartBeat border border-4 border-black">
                                                            <H1>GANASTE</H1>

                                                        </div>
                                                                `;
}else{
    contadorEnemigo =contadorEnemigo + 1
    document.getElementById("contadorEnemigo").innerHTML = `${contadorEnemigo}`;
    document.getElementById("resultado").innerHTML = `<h2 class="animate__animated animate__animated animate__rotateOut">Perdiste</h2>`;
}
}, 1000);

}

    

let juego = 0

document.getElementById("piedra").onclick = function(){
    juego = juego + 1
    document.getElementById("finDeJuego").innerHTML = `${juego} <br>`
    setTimeout(() => {
      if (juego == 3) {
        document.getElementById("prueba").innerHTML = `<h1>fin</h1> <br> 
                                                                    Jugador: ${contador}<br> 
                                                                    Maquina: ${contadorEnemigo}`;
      }
    }, 2000);

    piedra();
    }
document.getElementById("papel").onclick = function(){
    juego = juego + 1
    document.getElementById("finDeJuego").innerHTML = `${juego}`
    setTimeout(() => {
        if (juego == 3) {
            
          document.getElementById("prueba").innerHTML = `<h1>fin</h1> <br> 
                                                                      Jugador: ${contador}<br> 
                                                                      Maquina: ${contadorEnemigo}`;
        }
      }, 2000);
    papel();
    }
document.getElementById("tijera").onclick = function(){
    juego = juego + 1
    document.getElementById("finDeJuego").innerHTML = `${juego}`
    setTimeout(() => {
        if (juego == 3) {
          document.getElementById("prueba").innerHTML = `<h1>fin</h1> <br> 
                                                                      Jugador: ${contador}<br> 
                                                                      Maquina: ${contadorEnemigo}`;
        }
      }, 2000);
    tijera();
    }
    
// refrescar juego

/* let refrescar = document.getElementById('refrescar');
refresh.addEventListener('click', _ => {
            location.reload();
}) */
    



   

