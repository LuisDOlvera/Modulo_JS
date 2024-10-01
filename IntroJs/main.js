/* Tipos de Variable */
// let ratio = 10;
// const PI = 3.1415;

/* Tipos de dato */
// number =====> 8, 10, 235412345, 121.545
// string =====> "hola", "koders", "generacióm", "25", "Bienvenidos a JavaScript"
// bolean =====> true false
/* objeto =====> {
        *propiedades* edad: 33, *valores*
        *propiedades* nombre: "Luis Daniel Olvera Díaz", *valores*
        *propiedades* color: "rojo", *valores*
        *propiedades* isMentor: false, *valores*
        *metodos*     saludar: alert("hola koders") *valor*
}
 */
/* array ======> [
        "ajedrez",
        "música",
        "arte"
] */

/* Funciones =====> (argumentos) => {...contenido} */

/* Operadores aritmeticos */

// suma => +
// resta => -
// multiplicación => *
// división => /
// modulo => % (representa el residuo de una división)
// asignación => = (sirve para asignar un valor a una variable)

// asignación aditiva => +=
let asigAditiva = 10;
asigAditiva += 5;
console.log("Asignación Aditiva ===>", asigAditiva);

// asignación sustractiva => -=
let asigSustractiva = 25;
asigSustractiva -= 5;
console.log("Asignación Sustractiva ===>", asigSustractiva);

// asignación multiplicativa => *=
let asigMult = 30;
asigMult *= 2;
console.log("Asignación Multiplicativa ===>", asigMult);

// asignación divisiva => /=
let asigDivisiva = 50;
asigDivisiva /= 5;
console.log("Asignación Divisiva ===>", asigDivisiva);

// asignación modular => %=
let asigMod = 24;
asigMod %= 7;
console.log("Asignación Modular ===>", asigMod);

// incremento => ++   (Incrementa en 1)
let incremento = 18;
incremento++;
console.log("Incremento ===>", incremento);

// decremento = --     (Decremento en 1)
let decremento = 23;
decremento--;
console.log("Decremento ===>", decremento);

/* Operadores de Comparación */

// mayor que => >             (verdadero o falso)
let mayorque1 = 6;
let mayorque2 = 4;
console.log("Mayor que ===>", mayorque1 > mayorque2);

// menor que => <             (verdadero o falso)
let menorque1 = 8;
let menorque2 = 12;
console.log("Menor que ===>", menorque1 < menorque2);

// igual que => ==            (verdadero o falso)
let first = 8;
let second = "8";
console.log("Igual que ===>", first == second);

// identico que => ===        (verdadero o falso)
let identicoque1 = 56;
let identicoque2 = "56";
console.log("Identico que ===>", identicoque1 === identicoque2);

// diferente que => !=        (verdadero o falso)
let diferenteque1 = 45;
let diferenteque2 = 16;
console.log("Diferente que ===>", diferenteque1 != diferenteque2);

// mayor o igual que => >=    (verdadero o falso)
let mayoroigual1 = 26;
let mayoroigual2 = 23;
console.log("Mayor o Igual que", mayoroigual1 >= mayoroigual2);

// menor o igual que => <=    (verdadero o falso)
let menoroigual1 = 45;
let menoroigual2 = 55;
console.log("Menor o Igual que", menoroigual1 <= menoroigual2);

/* Operadores Lógicos */

// and  =====> A && B  devuelve true sólo si ambas condiciones son verdaderas
// or   =====> a || B  devuelve true si al menos una de las dos condiciones es verdadera
// not  =====> !A  !(A < B)

/* Condicionales */

// if(condición){ si se cumple} else { si no se cumple }

if (5 < 4) {
    console.log("si es menor");
} else {
    console.log("no es menor");
}
// ternario  ====> condicion ? que hacer si se cumple : que hacer si no se cumple

// =========  Ejercicios:  =========

/* 1.- Escribir el código que me muestre el área de un círculo cuyo radio es igual a 15.*/

let ratio = 15;
const PI = 3.1416;
let area = PI * ratio * ratio;
console.log("El área del círculo es: ", area);

/* 2.- Escribir el código que me indique si el área de mi círculo es mayor que 10. */

if (area > 10) {
    console.log("El área del círculo es mayor a 10");
} else {
    console.log("El área del círculo NO es mayor a 10");
}

/* 3.- Escribir el código que me permita juntar las palabras "Somos" y "Koders" en un sólo string. */

let string1 = "Somos";
let string2 = "Koders";

console.log(string1 + " " + string2);
