let ataqueJ  // variable global que ira cambiando en cada funcion de Ataque.
let ataqueE  // variable global para los ataques aleatorios de las mascotas Enemigas
let vidasJ = 3 //variable global de vidas Jugador (se usa en funcion combate)
let vidasE = 3 // variable global de vidas Enemigo ( se usa en funcion combate)



function iniciarJuego(){ // Esta funcion detecta los click de los botones de la etiqueta "seleccionar-mascota" y son llamadas por  la funcion window.addeEventListener("load",iniciarjuego)

    let sectionSeleccionarAtaq = document.getElementById("seleccion-ataque")
        sectionSeleccionarAtaq.style.display = "none"  // comando para ocultar la seccion de seleccionar ataque.

     let botonMascotaJ  = document.getElementById("boton-mascota") // Creo una variable a partir de una etiqueta HTML
        botonMascotaJ.addEventListener("click",seleccionarMascotaJ) //DETECTA EL CLICK 
     
     let botonataqFuego = document.getElementById("ataque-fuego") //seleccionar ataques.
         botonataqFuego.addEventListener("click",ataqueFuego)

     let botonataqTierra = document.getElementById("ataque-tierra")
         botonataqTierra.addEventListener("click",ataqueTierra)

     let botonataqAgua = document.getElementById("ataque-agua")
        botonataqAgua.addEventListener("click",ataqueAgua)
        
     let botonReiniciar = document.getElementById("boton-reiniciar")        // Se añade el boton de reiniciar 
        botonReiniciar.addEventListener("click",reiniciar)
        botonReiniciar.style.display = "none" // comando para esconder el   boton reinciar al iniciar el juego 
}
function seleccionarMascotaJ() { // funcion para mostrar el personaje SELECCIONADO utilizando la propiedad .checked que verifica la seleccion de mascota en el input de HTML, y cambia la etiqueta <span> del personaje seleccionado.
        
    let sectionSeleccionarAtaq = document.getElementById("seleccion-ataque")
        sectionSeleccionarAtaq.style.display = "flex"  // comando para desbloquear esta seccion 
    
    let sectionSeleccionarMascota = document.getElementById("seleccion-mascota")
        sectionSeleccionarMascota.style.display = "none"  // comando para ocultar la seccion de mascota luego de elegir la nuestra.
    

    let hipodoge = document.getElementById("hipodoge").checked    // etiquetas html 
    let capipepo = document.getElementById("capipepo").checked      // etiquetas html 
    let ratigueya = document.getElementById("ratigueya").checked    // etiquetas html 
    let spanMascotaJ = document.getElementById("mascota-jugador")   // etiquetas html
    let jugada = 1

    // con inner.HTML cambio la etiqueta <span> de HTML por lo que yo decida.
   if(hipodoge){
        spanMascotaJ.innerHTML = "Hipodoge"     
   }else if(capipepo){
        spanMascotaJ.innerHTML = "Capipepo"
   }else if(ratigueya){
        spanMascotaJ.innerHTML = "Ratigueya"
   }
    else{
        alert("Necesitas SELECCIONAR una mascota para poder Jugar.")
        jugada = 0
        reiniciar()
    }

    if (jugada == 1){seleccionarMascotaE()
    }

}

function seleccionarMascotaE () { // funcion para mostrar el personaje aleatorio del el enemigo utilizando el comando " inner.HTML " para cambiar la etiqueta <span> del HTML

    let mascotaAleatoria = aleatorio(1,3)  // mascota aleatorio determina que mascota ha elegido el PC
    let spanMascotaE = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria == 1){
        spanMascotaE.innerHTML = "Hipodoge"
    }else if (mascotaAleatoria == 2){
        spanMascotaE.innerHTML = "Capipepo"
    }else {
        spanMascotaE.innerHTML = "Ratigueya"
    }

}

function AtaqueAleatorioE(){    // Funcion para los ataques ALEATORIOS de la mascotas enemigas 
   
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio ==1) {       //Condicion para asignar ataque dependiendo el numero aleatorio que se genere.
        ataqueE = "🔥" 
    }else if (ataqueAleatorio == 2){
        ataqueE = "💧"
    }else {
        ataqueE = "🌳"
    }

    combate()  // SE LLAMA A LA FUNCION COMBATE PARA QUE SUCEDA LUEGO DE QUE SE HAYA ELEGIDO el jugador
}

function ataqueFuego(){ // Asigna valor a la variable ataqueJ 
    ataqueJ = "🔥"
    AtaqueAleatorioE()
}

function ataqueTierra() {// Asigna valor a la variable ataqueJ 

    ataqueJ = "🌳"
    AtaqueAleatorioE()
}

function ataqueAgua(){ //Asigna valor a la variable ataqueJ 
    ataqueJ ="💧"
    AtaqueAleatorioE()
}

function mensajes(resultado){ // funcion para mostrar mensajes luego de generar el ataqueAleatorioE. ".createElement('p')" crea un parrafo y el appendChild hace que aparezca ese parrafo en la etiqueta mensajes del HTML.
                            // ++ SE AÑADE ARGUMENTO RESULTADO PARA MOSTRAR SI GANA PIERDA O EMPATA DESDE LA FUNCION COMBATE()

    let sectionMensajes = document.getElementById('resultado')   // agarro la etiqueta de la nueva seccion RESULTADO del html 
    let ataqueDelJ = document.getElementById('ataque-jugador')  // nueva etiqueta 
    let ataqueDelE = document.getElementById('ataque-enemigo')  // nueva etiqueta 

    let nuevoAtaqJ = document.createElement("p")
    let nuevoAtaqE = document.createElement("p")
   
    sectionMensajes.innerHTML = resultado // asigno la variable RESULTADO DEL COMBATE en la seccion HTML DE 'resultado'
    nuevoAtaqJ.innerHTML = ataqueJ // se agrega variable de JS 'ataqueJugador' al nuevo parrafo a mostrar en el HTML
    nuevoAtaqE.innerHTML = ataqueE // se agrega variable de JS 'ataqueEnemigo' al nuevo parrafo a mostrar en el HTML


    ataqueDelJ.appendChild(nuevoAtaqJ)     // en la seccion HTML , inserta un parrafo con la variable de JS.
    ataqueDelE.appendChild(nuevoAtaqE)
}

function combate(){ // funcion de combate para determinar la victoria, derrota o empate, luego de la funcion  "ATAQUEALEATORIOENEMIGO"

    let spanVidasJ = document.getElementById("vida-jugador") // se generan estas variables para cambiar el numero de vidas del HTML
    let spanVidasE = document.getElementById("vida-enemigo") // en funcion de si se gana o pierde el combate.

    if(ataqueE == ataqueJ){
        mensajes("EMPATE")
    }else if((ataqueJ == "🔥" && ataqueE =="🌳") || (ataqueJ == "💧" && ataqueE == "🔥") ||(ataqueJ == "🌳"&& ataqueE == "💧"))  {        // condiciones de victorias
        mensajes("¡ GANASTE !🎉")
        //se llama a la funcion mensajes() para cambiar el resultado despues de cada batalla.
        vidasE--        // a las vidas del jugador se le resta 1
        spanVidasE.innerHTML = vidasE   // -> se cambia la etiqueta span por las vidas actuales luego del combate.

    }else { 
        mensajes("PERDISTE 😢")// condicion de derrota.
        vidasJ--    
        spanVidasJ.innerHTML = vidasJ
    }
        revisarVidas()    // Revisar las vidas para parar el juego.
}

function revisarVidas(){    // Funcion para verificar el conteo de vidas
    if(vidasE == 0){    
        mensajeFinal("¡ FELICITACIONES !, GANASTE")     // si el enemigo se queda sin vida se disparara el siguiente mensaje
    }else if (vidasJ == 0){
        mensajeFinal("LO SIENTO .... HAS PERDIDO ):")  // si el jugador se queda sinvidas se disparara el siguiente mensaje
    }   
}

function mensajeFinal(resultadoFinal){  // Funcion que dispara un mensaje de termino de combate cuando uno de los dos jugadores se queda sin vidas.
    let sectionMensajes = document.getElementById('resultado') // SE CAMBIA EL NOMBRE DE LA ETIQUETA HTML
    let parrafo = document.createElement("p")   // se asigna una variable para la crecion de un parrafo
    sectionMensajes.innerHTML = resultadoFinal    // se hace que el contenido del parrafo sea el argumento de la funcion mensajeFinal("mensaje")
                                                // +++++ HACE QUE AL TERMINAR AL PERDER SE DISPARE EL MSJ FINAL Y EL BOTON DE REINICIAR.
    let botonReiniciar = document.getElementById("boton-reiniciar")         // se muestra el boton de reiniciar tras terminar el combate.
    botonReiniciar.style.display = "block"

    // Ahora debemos desactivar los botones de los ataques cuando los enemigos ya no tengan vida, asi que esto se realiza luego de determinar quien gana el combate entre los dos jugadores.

    let botonataqFuego = document.getElementById("ataque-fuego")        
        botonataqFuego.disabled = true
    let botonataqTierra = document.getElementById("ataque-tierra")
        botonataqTierra.disabled = true
    let botonataqAgua = document.getElementById("ataque-agua")
        botonataqAgua.disabled = true

}

function reiniciar(){   // funcion para reiniciar el juego :)
    location.reload()      
}

function aleatorio(min,max) // genera un numero aleatorio segun las variables que se le asignen
{
    return  Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load",iniciarJuego)




