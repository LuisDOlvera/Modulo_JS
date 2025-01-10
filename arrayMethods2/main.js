// Iterando a través de un ciclo for:

let names = [
    "Daniela Olvera",
    "Mayra Miranda",
    "Emilio Olvera",
    "Luis Daniel Olvera",
];

const printName = (nameToPrint) => {
    console.log(nameToPrint);
};

/* 
for (let i = 0; i < names.length; i++) {
    printName(names[i]);
}
 */

// Iterando con Método forEach:
/* 
names.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
});
 */

names.forEach((item, index, arr) => {
    printName(item);
});

/* Función que me devuelve una liata de los nombres de mi Array names en mayúsculas utilizando forEach. */

const uppercaseNames = (namesArray) => {
    let uppercased = [];
    namesArray.forEach((name) => uppercased.push(name.toUpperCase()));
    console.log(uppercased);
    return uppercased;
};

uppercaseNames(names);

/**
 * Se necesita saber cuáles de estos números son pares y cuáles nones
 */

let numbers = [45, 8, 26, 21, 45, 78, 3];

const getEvenOrOddNumbers = (numbersArray) => {
    numbersArray.forEach((number) => {
        if (number % 2 === 0) {
            console.log(`El número: ${number} es par`);
        } else {
            console.log(`El número: ${number} es impar`);
        }
    });
};

console.log(getEvenOrOddNumbers(numbers));

// Otra forma de resolverlo:

const isEven = (number) => {
    number % 2 === 0
        ? console.log(`El número ${number} es par`)
        : console.log(`El número ${number} es impar`);
};

numbers.forEach(isEven);
