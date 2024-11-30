/**
 * De una base de datos, tenemos el modelo que representa un usuario, y se ve de la siguiente forma:
 *
  {
  name: "Harry",
  lastname: "Styles",
  adress: null,
  age: 30
 
  }
 *
 * Necesitamos obtener el nombre completo de cualquier usuario.
 */

let person1 = {
    name: "Harry",
    lastname: "Styles",
    adress: null,
    age: 30,
};

let person2 = {
    name: "Steve",
    lastname: "Harris",
    adress: null,
    age: 25,
};

const getFullName = (personObject) => {
    let personName = personObject.name;
    let personLastName = personObject.lastname;
    let personFullName = `${personName} ${personLastName}`;
    return personFullName;
};

let result1 = getFullName(person1);
let result2 = getFullName(person2);
console.log(result1);
console.log(result2);

const getTextLength = (text) => {
    let count = text.length;
    return count;
};

// Función que devuelva el número de caracteres de un texto cualquiera
let resultLength = getTextLength("Chiringuito");
let resultLength2 = getTextLength("Californication");
console.log(resultLength);
console.log(resultLength2);

/* Función que indique si la cantidad de caracteres en un texto cualquiera es par o impar */

const getEvenOrOdd = (textToCount) => {
    let textCount = textToCount.length;
    return textCount % 2 === 0
        ? "La cantidad de caracteres es par"
        : "La cantidad de caracteres es impar";
};

let resultEvenOrOdd = getEvenOrOdd("Codecademy");
let resultEvenOrOdd2 = getEvenOrOdd("Freecodecampesp");
console.log(resultEvenOrOdd);
console.log(resultEvenOrOdd2);

/* Crear una función que reciba como argumentos un texto y un número, y que devuelva como resultado el caracter que se encuentre en la posición representada por el número recibido. */

const getCharPosition = (textToRecive, NumPosition) => {
    let charPosition = textToRecive.charAt(NumPosition);
    return charPosition;
};

let resultCharPosition1 = getCharPosition("JavaScript", 5);
let resultCharPosition2 = getCharPosition("Hello Koders", 9);
console.log(resultCharPosition1);
console.log(resultCharPosition2);
