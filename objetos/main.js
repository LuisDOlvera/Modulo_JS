let mentor = {
    name: "Israel",
    lastname: "Salinas Martínez",
    age: 33,
    height: 1.72,
    weight: 75,
    experienceInYears: 8,
    signatures: ["HTML", "CSS", "JS", "BS", "TW", "Firebase", "ReactJS"],
    gender: "male",
    greeting: () => {
        console.log("Si buenas noches kodeeeeeeers!!!");
    },
    greetAKoder: (koderToGreet) => {
        console.log(`Buenas noches estimad@ ${koderToGreet}`);
    },
    bringSomething: () => {
        return "lo que sea que se me ocurra";
    },
};

console.log(mentor);
console.log(mentor.age);
console.log(mentor.gender);
mentor.greeting();
mentor.greetAKoder("Luis Daniel");

let something = mentor.bringSomething();
console.log(something);

// Función en donde se concatenan las propiedades dentro de un string.

const printMentorName = (mentor) => {
    console.log(
        "Hola, mi nombre es " +
            mentor.name +
            " " +
            mentor.lastname +
            " y tengo " +
            mentor.age +
            "años!"
    );
    // Función utilizando Template Strings.
    console.log(
        `Hola, mi nombre es ${mentor.name} ${mentor.lastname} y tengo ${mentor.age} años!`
    );
    // Función que realiza una operación matemática con Template Strings.
    console.log(
        `Hola, mi nombre es ${mentor.name} ${mentor.lastname} y tengo ${
            30 + 3
        } años!`
    );
};

printMentorName(mentor);

// Agregar una nueva propiedad al Objeto:
mentor.hobbies = ["chess", "music", "starcraft", "diablo", "koding"];

console.log(mentor);

// Imprimir de forma individual:
console.log(mentor.hobbies);

mentor.hobbies = "none";
console.log(mentor.hobbies);

// Eliminar una propiedad del Objeto:
delete mentor.age;
console.log(mentor);

// Para saber si un Objeto tiene una propiedad en específico:

console.log(mentor.hasOwnProperty("hobbies"));

/* Para el caso de que no se tenga una propiedad, JavaScript devuelve Undefined, sin embargo, se puede manejar así: */

console.log(mentor.adress);

if (mentor.adress === undefined) {
    console.log("El mentor no tiene una dirección");
}

/* 
Sintaxis de condicional If

if( condicion1 ) {
    si condicion 1 se cumple
} else if ( condicion2 ) {
    si condicion 2 se cumple 
} else {
    si no se cumple ninguna de las condiciones anteriores
}  */

/* Sintaxis de operador ternario ?

condicion ? si se cumple : si no se cumple */

/* Sintaxis de Condicional switch

let selection = "a"  // "b" || "c" || "d"

// Si lo hicieramos con un if:

if( selection === "a"){
    console.log("tu seleccion es a")
} else if ( seleccion === "b"){
    console.log("tu seleccion es b");
} else if ( seleccion === "c"){
    console.log("tu seleccion es c");
} else if ( seleccion === "d"){
    console.log("tu seleccion es d");
} else {
    console.log("tu seleccion no es válida");
} */

// Con Switch

/* switch(selection){
    case "a":
        console.log("tu seleccion es a");
        break
    case "b":
        console.log("tu seleccion es b");
        break
    case "c":
        console.log("tu seleccion es c");
        break
    case "d":
        console.log("tu seleccion es d");
        break
    default: 
        console.log("tu seleccion no es válida");    
} */

/* 1.- Crear un  objeto de JavaScript que represente un programa de televisión, el cuL puede tener las propiedades que se deseen, sin embaego, debe tener por lo menos estas tres propiedades 
    - Nombre, Género y Lanzamiento
    - Debe tener el método presentShow y debe regresar un texto con la presentación del programa donde describa el Nombre, el género y el lanzamiento. */

let tvShow = {
    name: "Breaking Bad",
    creator: "Vince Gilligan",
    genere: ["acción", " drama", " suspenso"],
    launch: "Enero de 2008",
    seasons: 5,
    country: "USA",
    presentShow: () => {
        console.log(
            `Esta galardonada serie es ${tvShow.name} serie de ${tvShow.genere} que fue lanzada en ${tvShow.launch} y que cuenta con ${tvShow.seasons} exitosas temporadas, escrita y dirigida por ${tvShow.creator} un verdadero genio del género. No te la pierdas!!`
        );
    },
};

let tvShow2 = {
    name: "The Office",
    creator: "Greg Daniels",
    genere: "Comedia",
    launch: "Marzo de 2005",
    seasons: 6,
    country: "USA",
    presentShow: () => {
        console.log(
            `Esta galardonada serie es ${tvShow.name} serie de ${tvShow.genere} que fue lanzada en ${tvShow.launch} y que cuenta con ${tvShow.seasons} exitosas temporadas, escrita y dirigida por ${tvShow.creator} un verdadero genio del género. No te la pierdas!!`
        );
    },
};

let tvShow3 = {
    name: "The Last Of Us",
    creator: "Neil Druckmann",
    genere: ["acción", " drama", " suspenso"],
    launch: "Febrero de 2023",
    seasons: 5,
    country: "USA",
    presentShow: () => {
        console.log(
            `Esta galardonada serie es ${tvShow.name} serie de ${tvShow.genere} que fue lanzada en ${tvShow.launch} y que cuenta con ${tvShow.seasons} exitosas temporadas, escrita y dirigida por ${tvShow.creator} un verdadero genio del género. No te la pierdas!!`
        );
    },
};

tvShow.presentShow();

/* 2.- Crear una función que me permita preguntar algo del programa
    ( Nombre, Género, Lamzamiento).    
    esta función, debe funcionar para cualquier objeto, para cualquier programa de TV.  */

const getShowData = (tvShow, propertyToExtract) => {
    switch (propertyToExtract) {
        case "nombre":
            return tvShow.name;
        case "genero":
            return tvShow.genere;
        case "lanzamiento":
            return tvShow.launch;
        default:
            return "Tu selección no es válida";
    }
};

let test1 = getShowData(tvShow, "nombre");
let test2 = getShowData(tvShow2, "genero");
let test3 = getShowData(tvShow3, "lanzamiento");
let test4 = getShowData(tvShow, "genero");
let test5 = getShowData(tvShow, "creator");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
