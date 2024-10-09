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
    console.log(
        `Hola, mi nombre es ${mentor.name} ${mentor.lastname} y tengo ${
            30 + 3
        } años!`
    );
};

printMentorName(mentor);
