/**
 * array.push(item)
 * array.concat(array2)
 * array.shift()
 * array.pop()
 * array.reverse()
 * array.splice(index, howmay, items...)
 * array.fill(value, start, end)
 * array.sort(callback)
 */

let arr1 = ["perro", "gato", "iguana"];
let arr2 = ["guepardo", "león", "tigre"];

arr1.push("lagarto");

console.log(arr1);

let concatenatedArrays = arr1.concat(arr2);
console.log(concatenatedArrays);

// arr1 y arr2 quedan intactos auque hayamos utilizado el método concat
console.log(arr1);
console.log(arr2);

// Método .shift() elimina el primer elemento de un array
concatenatedArrays.shift();
console.log("Método shift() ===>", concatenatedArrays);

// Método .pop() elimina el último elemento de un array
concatenatedArrays.pop();
console.log("Método pop() ===>", concatenatedArrays);

// Método .splice() permite agregar o quitar elementos a poartir de un índice.
// Queremos eliminar al item "guepardo"
concatenatedArrays.splice(3, 1);
console.log("Método splice() ===>", concatenatedArrays);

// Queremos agregar los items "elefante", "pingüino");
concatenatedArrays.splice(3, 1, "elefante", "pingüino");
console.log("Método splice() ===>", concatenatedArrays);

/* Método .fill() sustituye el contenido del array con el elemento indicado en el 1er argumento y hasta el numero original de elementos. */
/* concatenatedArrays.fill("araña", 2, 8);
console.log("Método fill() ===>", concatenatedArrays); */

// Rellenamos un array vacío con el método fill() utilizando un constructor.

/* let emptyArray = new Array(10);
console.log(emptyArray); // [ <10 empty items> ]
emptyArray.fill("filled", 0, 10); 
console.log(emptyArray); */

/* Método .sort() ordena los elementos de un array, sobreescribe el array original, ordena los elementos que son strings en orden alfabético y en orden ascendente. */
console.log(concatenatedArrays);
concatenatedArrays.sort();
console.log("Método .sort() ====>", concatenatedArrays);

// Utilizamos el método .sort() en elementos que No son un string, como por ejemplo números:

let numbersArray = [5, 1, 85, 45, 26, 12, 98, 798];
numbersArray.sort((a, b) => a - b); // en orden ascendente.
numbersArray.sort((a, b) => b - a); // en orden descendente.
console.log("Método .sort() ===>", numbersArray);

/* Método .reverse() Invierte el orden de los elementos */
console.log(concatenatedArrays);
concatenatedArrays.reverse();
console.log("Método .reverse() ===>", concatenatedArrays);

// Ordenar por precio el siguiente array de objetos:
let products = [
    { name: "Cable de corriente", price: 15 },
    { name: "pedalera", price: 6500 },
    { name: "Audífonos", price: 1200 },
    { name: "micrófono bidireccional", price: 2250 },
    { name: "Consola de Audio", price: 5900 },
];

products.sort((a, b) => a.price - b.price);
console.log("Método .sort() ====>", products);

// Ordenar por nombre el siguiente arreglo de objetos:
products.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0; // si son iguales, va por el siguiente valor
    }
});
console.log("Método .sort() ====>", products);

// ***** Ejercicios: *****

let mentors = [
    ["Naomi", "López"],
    ["Israel", "Salínas"],
    ["Charles", "Silva"],
    ["Rose", "Ortega"],
];

let koders = [
    {
        name: "Verónica Cruz",
        scores: {
            html: 8,
            css: 9.2,
            js: 9.7,
            bootstrap: 8,
        },
        isGraduated: true,
    },
    {
        name: "Miguel Aceves",
        scores: {
            html: 8.7,
            css: 10,
            js: 8.3,
            bootstrap: 9.8,
        },
        isGraduated: false,
    },
    {
        name: "Antonio Cano",
        scores: {
            html: 9.2,
            css: 10,
            js: 10,
            bootstrap: 6.5,
        },
        isGraduated: false,
    },
];

/**
 * 1.- Se necesita una lista que contenga los nombres completos de los mentores ordenados alfabéticamente.
 */
const getSortedFullNames = (mentors) => {
    let fullNames = [];
    for (let i = 0; i < mentors.length; i++) {
        fullNames.push(`${mentors[i][0]} ${mentors[i][1]}`);
    }
    fullNames.sort();
    return fullNames;
};
let sortedFullNames = getSortedFullNames(mentors);
console.log(sortedFullNames);

/**
 * 2.- Se necesita una lista con los nombres y promedios generales de todos los Koders
 */
const getkodersAverages = (koders) => {
    let kodersAverages = [];
    for (let i = 0; i < koders.length; i++) {
        let nameKoder = koders[i].name;
        let scores = Object.values(koders[i].scores);
        let totalScore = 0;
        for (let j = 0; j < scores.length; j++) {
            totalScore += scores[j];
        }
        let average = totalScore / scores.length;
        kodersAverages.push({ name: nameKoder, average: average });
    }
    return kodersAverages;
};
let resultKodersAverages = getkodersAverages(koders);
console.log(resultKodersAverages);
/**
 * 3.- Se necesita una lista con los nombres de aquellos koders que aún no se han graduado.
 */
const getNotGraduatedKoders = (koders) => {
    let notGraduatedKoders = [];
    for (let i = 0; i < koders.length; i++) {
        if (!koders[i].isGraduated) {
            notGraduatedKoders.push(koders[i].name);
        }
    }
    return notGraduatedKoders;
};
let resultNotGraduatedKoders = getNotGraduatedKoders(koders);
console.log(resultNotGraduatedKoders);
/**
 * 4.- Se necesita conocer el promedio grupal de cada materia impartida en el bootcamp.
 * html -> 9
 * css -> 10
 * etc...
 */

const getSignatureAverage = (dataArray, signature) => {
    let signatureTotal = 0;
    for (let i = 0; i < dataArray.length; i++) {
        let signatureScore = dataArray[i].scores[signature];
        signatureTotal += signatureScore;
        //console.log(dataArray[i].scores[signature]);
    }
    let signatureAverage = signatureTotal / dataArray.length;
    console.log(signatureAverage);
    //return signatureAverage;
    return `El promedio general de ${signature} es: ${signatureAverage}`;
};
// Regresamos el resultado dentro de un Array:

const getGeneralSignatureAveragesInList = (dataArray) => {
    let averagesList = [];
    averagesList.push(getSignatureAverage(dataArray, "html"));
    averagesList.push(getSignatureAverage(dataArray, "css"));
    averagesList.push(getSignatureAverage(dataArray, "js"));
    averagesList.push(getSignatureAverage(dataArray, "bootstrap"));
    console.log(averagesList);
    return averagesList;
};
getGeneralSignatureAveragesInList(koders);

// Regresamos el resultado dentro de un Objeto:

/* const getGeneralSignatureAverages = (dataArray) => {
    let averagesObject = {};
    averagesObject.html = getSignatureAverage(dataArray, "html");
    averagesObject.css = getSignatureAverage(dataArray, "css");
    averagesObject.js = getSignatureAverage(dataArray, "js");
    averagesObject.bootstrap = getSignatureAverage(dataArray, "bootstrap");
    console.log(averagesObject);
    return averagesObject;
};
 */
//getSignatureAverage(koders, "css");
/* 
getGeneralSignatureAverages(koders);
 */

/**
 * 5.- Se necesita saber cuál es koder con el promedio más alto y cuál es el que tiene el promedio más bajo.
 */

const getKoderAverage = (koders) => {
    // destructuring
    let { name, scores } = koders;
    let { html, css, js, bootstrap } = scores;
    let average = (html + css + js + bootstrap) / 4;
    let koderObject = { average, name };
    console.log(koderObject);
    return koderObject;
};

const getAllKodersAverage = (dataArray) => {
    let averagesArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        let singleAverage = getKoderAverage(dataArray[i]);
        averagesArray.push(singleAverage);
    }
    return averagesArray.sort((a, b) => a.average - b.average);
};

const getBestAverage = (averageArray) => averageArray.pop();
const getLowestAverage = (averageArray) => averageArray.shift();

let kodersAverages = getAllKodersAverage(koders);

let bestKoder = getBestAverage(kodersAverages);
let koderForTraining = getLowestAverage(kodersAverages);

console.log("-----------------------------");

console.log(bestKoder);

console.log("-----------------------------");

console.log(koderForTraining);

//getKoderAverage(koders[0]);
