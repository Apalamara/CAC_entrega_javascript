///// Unidad 2

//Funcion para clickar
function clickeando(selector, funcion){
    let button = document.querySelector(selector)
    button.addEventListener("click",funcion,false)
}

//Funcion para mostrar un mensaje
function mostrarMensaje(selector, mensaje){
    let message = document.querySelector(selector)
    message.innerText = mensaje
}


///// FUNCIONES GRAL

//Funcion para decir si es par, impar o cero
function parity(number){
    const paridad = number == 0 ? 'cero' : number % 2 == 0 ? 'par' : 'impar';
    return paridad
}

//Funcion para decir si es multiplo de 3
function multiple(number){
    const paridad = number % 3 == 0 ? 'si' : 'no';
    return paridad
}

// Ejercicio 07
//Llamar Click
clickeando(".ej_07", ejercicio07)

function ejercicio07(){
    console.log("Ejercicio 07")

    let number = prompt("Ingrese un numero")
    let resultado = parity(number)

    //Llamar al mensaje
    mostrarMensaje('.message_07',`El numero que ingreso es: ${resultado}`)
}


// Ejercicio 08
//Llamar Click
clickeando(".ej_08", ejercicio08)

function ejercicio08(){
    console.log("Ejercicio 08")
    
    let number = prompt("Ingrese un numero")
    let resultado = multiple(number)

    //Llamar al mensaje
    mostrarMensaje('.message_08',`El numero es multiplo de 3?: ${resultado}`)
}
