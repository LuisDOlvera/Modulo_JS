/* let ratio = 10;
const PI = 3.1415;

let area = PI * ratio * ratio

let ratio2 = 20;
let area2 = PI * ratio * ratio

let ratio3 = 30;
let area3 = PI * ratio * ratio */

//Función que calcule el área de un círculo.

/* function getCircleArea(ratio) {
    //let ratio = es como un valor fantasma
    const PI = 3.1415;
    let area = PI * ratio * ratio;
    return area;
}

let circleArea1 = getCircleArea(5);
let circleArea2 = getCircleArea(3);
let circleArea3 = getCircleArea(6);

console.log(circleArea1);
console.log(circleArea2);
console.log(circleArea3);
 */
// Función que calcule el área de un rectángulo.

/*
Pasos para la crear la función.

1.- Crear una nueva función llamada getRectangleArea
    esta función recibe 2 argumentos: widt y height.
2.- Dentro de la función, crear la variable rectangleArea.
3.- Asignar a la variable rectangleArea el resultado de ejecutar
    la formula para calcular el área de un rectángulo ( w x h )
    (usar los valores de los argumentos)
4.- Dentro de la función, retornar la variable rectangleArea.
*/

/* Función convencional */

/* function getRectangleArea(width, height) {
    let rectangleArea = width * height;
    return rectangleArea;
} 

let resultArea = getRectangleArea(15, 15);
console.log("El área del rectángulo es: ", resultArea); */

/* Función para calcular el área de cualquier polígono regular de 5 o más lados*/

function getAreaPoligono(longLados, numLados) {
    let perimetro = longLados * numLados;
    let apotema = 50;
    let areaPoligono = (perimetro * apotema) / 2;
    return areaPoligono;
}

let resutlPoligono = getAreaPoligono(20, 5);
let resultPoligono2 = getAreaPoligono(18.5, 5);

console.log("El área del poligono regular es: ", resutlPoligono);
console.log("El área del segundo poligono regular es: ", resultPoligono2);

/*

Ejemplo de funciones anónimas, el método setTimeOut.

setTimeout(function(){
    console.log("Hola!!");
},600); 

 Sintaxis de Función Anónima:

 function(){
    do something
} 

 Sintaxis de Función Flecha:

const myFunction = (arg1, arg2, ...argN) => {
    ...do something
}; 

 */

// Función Flecha para el área del rectángulo

/* const arrowRectangleArea = (width, height) => {
    let rectanleArea = width * height;
    return rectanleArea;
}; */

// Función Flecha con Return Implícito:

const arrowRectangleArea = (width, height) => width * height;

let resutlArrowArea = arrowRectangleArea(24, 22);
console.log("El área del rectangulo es: ", resutlArrowArea);

// Función Flecha con Return Implícito para calcular el área de un círculo

const PI = 3.1415;

const arrowCircleArea = (ratio) => PI * ratio * ratio;

let circleArea1 = arrowCircleArea(5);
let circleArea2 = arrowCircleArea(3);
let circleArea3 = arrowCircleArea(6);

console.log(circleArea1);
console.log(circleArea2);
console.log(circleArea3);

// Ejercicios.

/**
 * 1.- Crear una función flecha que me indique si un número es par.
 */

const getEvenOrOddNumber = (number) => {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

let resultNumber = getEvenOrOddNumber(5);
let resultNumber2 = getEvenOrOddNumber(6);
console.log(resultNumber);
console.log(resultNumber2);

// la misma función pero con Return Implícito y Operador Ternario.

const obtenerNumeroParImpar = (numero) => (numero % 2 === 0 ? true : false);

let resultadoNumero1 = obtenerNumeroParImpar(7);
let resultadoNumero2 = obtenerNumeroParImpar(8);
let resultadoNumero3 = obtenerNumeroParImpar(15);

console.log("Es numero par? ", resultadoNumero1);
console.log("Es numero par? ", resultadoNumero2);
console.log("Es numero par? ", resultadoNumero3);

/**
 * 2.- Crear una función Flecha que me indique si una persona es mayor o menor de edad.
 */

const getMinorOrAdult = (age) => {
    if (age < 18) {
        return "Minor";
    } else {
        return "Adult";
    }
};

let resultAge1 = getMinorOrAdult(27);
let resultAge2 = getMinorOrAdult(18);
let resultAge3 = getMinorOrAdult(15);

console.log(resultAge1);
console.log(resultAge2);
console.log(resultAge3);
