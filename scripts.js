///// Unidad 1

// Ejercicio 01
let button_01 = document.querySelector(".ej_01")

button_01.addEventListener("click",ejercicio01,false)

function ejercicio01(){
    console.log("Ejercicio 01")

    let name = prompt("Ingrese su nombre","Desconocido")
    let lastName = prompt("Ingrese su apellido","Desconocido")

    console.log(`Bienvenido ${name} ${lastName}`)

    let message_01 = document.querySelector('.message_01')
    message_01.innerText = `Bienvenido ${name} ${lastName}`
}

// Ejercicio 02
let button_02 = document.querySelector(".ej_02")

button_02.addEventListener("click",ejercicio02,false)

function ejercicio02(){
    console.log("Ejercicio 02")

    let pi = 3.1416;
    let diam = Number(prompt("Ingrese el diametro de un circulo","10"))
    let radio = diam/2;

    //let perimeter = pi*diam;
    let perimeter = (2*pi*radio).toFixed(2)
    let area = (pi*(radio*radio)).toFixed(2);

    let message_02 = document.querySelector('.message_02')
    message_02.innerText = `El perímetro del círculo es ${perimeter} y el área es ${area}`
}

// Ejercicio 03
let button_03 = document.querySelector(".ej_03")

button_03.addEventListener("click",ejercicio03,false)

function ejercicio03(){
    console.log("Ejercicio 03")

    let n1 = Number(prompt("Ingrese un numero (1/4)"))
    let n2 = Number(prompt("Ingrese un numero (2/4)"))
    let n3 = Number(prompt("Ingrese un numero (3/4)"))
    let n4 = Number(prompt("Ingrese un numero (4/4)"))

    let suma = n1+n2+n3+n4
    let promedio = suma/4
    

    let message_03 = document.querySelector('.message_03')
    message_03.innerText = `La suma es ${suma} y el promedio  es ${promedio}`
}


// Ejercicio 04
let button_04 = document.querySelector(".ej_04")

button_04.addEventListener("click",ejercicio04,false)

function ejercicio04(){
    let valorHora = Number(prompt("Ingrese el valor por hora"))
    let cantHoras = Number(prompt("Ingrese cant horas"))
    
    let sueldo = valorHora*cantHoras;

    let message_04 = document.querySelector('.message_04')
    message_04.innerText = `El sueldo mensual del empleado es de ${sueldo}`
}



// Intento mejorar para no repetir tanto


let button = document.querySelector(".ej_05")
button.addEventListener("click",ejercicio05,false)

// Ejercicio 05
function ejercicio05(){
    let valorHora = Number(prompt("Ingrese el valor por hora"))
    let cantHoras = Number(prompt("Ingrese cant horas mensuales"))
    let anosTrabajados = Number(prompt("Ingrese cant de años trabajados"))
    let sueldo01;
    let sueldo;

    if (anosTrabajados >= 1){
        sueldo01 = valorHora*cantHoras
        sueldo = sueldo01+(sueldo01*0.15)*anosTrabajados
    } else {
        sueldo = valorHora*cantHoras
    }


    let message_05 = document.querySelector('.message_05')
    message_05.innerText = `El sueldo mensual del empleado es de ${sueldo}`
    
}

// Ejercicio 06

let button_06 = document.querySelector(".ej_06")
button_06.addEventListener("click",ejercicio06,false)


function ejercicio06(){
    let valorHora = Number(prompt("Ingrese el valor por hora"))
    let cantHoras = Number(prompt("Ingrese cant horas mensuales"))
    let anosTrabajados = Number(prompt("Ingrese cant de años trabajados"))
    let cantSeguros = Number(prompt("Ingrese cant de seguros vendidos"))
    let seguroCaro = Number(prompt("Ingrese monto del seguro mas caro vendido"))


    let sueldo01;
    let sueldo;
    let promedioHora;

    if (anosTrabajados >= 1){
        sueldo01 = valorHora*cantHoras
        sueldo = sueldo01+(sueldo01*0.15)*anosTrabajados+(sueldo01*0.25)*cantSeguros+seguroCaro*0.5
        promedioHora = sueldo/cantHoras
    } else {
        sueldo01 = valorHora*cantHoras
        sueldo = sueldo01+seguroCaro*0.5+(sueldo01*0.25)*cantSeguros
        promedioHora = sueldo/cantHoras
    }


    let message_06 = document.querySelector('.message_06')
    message_06.innerText = `El sueldo mensual del empleado es de ${sueldo} y el promedio x hora es ${promedioHora}`
    
}