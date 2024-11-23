/* Programa que me permite capitalizar (convertir cualquier palabra a un formato en que la primer letra sea mayúscula y las siguientes sean minusculas) cualquier palabra usando métodos de String. */

let str = "cAmEllO";

const capitalizeWord = (wordToCapitalize) => {
    let substr1 = wordToCapitalize.substring(0, 1);
    let substr2 = wordToCapitalize.substring(1);

    substr1 = substr1.toUpperCase();
    substr2 = substr2.toLowerCase();

    let result = substr1.concat(substr2);
    return result;
};

// O bien, la función se puede resumir:

/* const capitalizeWord = (wordToCapitalize) =>
    `${wordToCapitalize.substring(0, 1).toUpperCase()}${wordToCapitalize
        .substring(1)
        .toLowerCase()}`; 
        */

let test1 = capitalizeWord(str);
let test2 = capitalizeWord("anaxagoras");

console.log(test1);
console.log(test2);

let text = "Hello World!";
let myArray = text.slice(0, 2);

console.log(myArray);

/**
 * Ejercicios:
 *
 *      1.- Se necesitan las iniciales de cualquier nombre completo.
 *          Nombre, apellido paterno, apellido materno
 *
 *          - Luis Olvera Díaz
 *          - L. O. D.
 *
 *          - Jorge del Río Hernández
 *          - J. D. H.
 *
 */

const getInitials = () => {};

/**
 *      2.- Se necesita evaluar que los nombres de mis productos, sean fáciles de  recordar.
 *          - Los productos cuyo nombre tiene menos de 5 letras son fáciles.
 *          - Los demás productos son difíciles.
 */

const getProductEasyOrDifficult = (product) => {
    if (product.length < 6) {
        return "Fácil de Recordar";
    } else {
        return "Difícil de Recordar";
    }
};

let resultProduct1 = getProductEasyOrDifficult("Anaxagoras");
let resultProduct2 = getProductEasyOrDifficult("Zeus");
console.log(resultProduct1);
console.log(resultProduct2);

/**
 *      3.-
 *           Entrada: anglosajón
 *           Salida: anglo
 *                   sajón
 *
 *           Entrada: "entrada"
 *           Salida: ent
 *                   ada
 *
 *           Entrada: "salida"
 *           Salida: sal
 *                   ida
 *
 *           Entrada: "Salinas"
 *           Salida: Sal
 *                   nas
 *
 * si la cantidad de letras es par, se divide
 * si la cantidad de letras es impar, quita la letra de en medio y la divide
 *
 */

const getWordToEvaluate = (word) => {
    let wordToDivide = word.length;

    if (wordToDivide % 2 === 0) {
    }
};
