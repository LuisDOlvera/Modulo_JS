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
