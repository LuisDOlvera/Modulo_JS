let mentors = [
    {
        name: "Luis Daniel",
        lastname: "Olvera",
    },
    {
        name: "Mayra",
        lastname: "Miranda",
    },
    {
        name: "Daniela",
        lastname: "Olvera",
    },
    {
        name: "Fauces",
        lastname: "Olvera",
    },
];

// Utilizando un ciclo for:
/* const getFullNames = (dataArray) => {
    let fullnames = [];
    for (let i = 0; i < dataArray.length; i++) {
        let { name, lastname } = dataArray[i];
        let fullname = `${name} ${lastname}`;
        fullnames.push(fullname);
    }
    return fullnames;
};

let result = getFullNames(mentors);
console.log(result);
 */

// Utilizando el método .map()

const getFullNames = (mentorArray) => {
    let result = mentorArray.map((mentor, index, arr) => {
        let { name, lastname } = mentor;
        return `${name} ${lastname}`; // Este es el return de .map()
    });
    return result; // Este es el return de mi función.
};

let result = getFullNames(mentors);
console.log(result);

let people = [
    {
        name: "Israel",
        lastname: "Salinas martínez",
    },
    {
        name: "Ariana Naomi",
        lastname: "Lopez Puertos",
    },
    {
        name: "maydeli Berenice",
        lastname: "Sanchez loera",
    },
];

// Obtener las iniciales de cada persona

/* const getInitials = (peopleArray) => {
    return peopleArray.map((person) => {
        // Dividir el nombre y los apellidos en palabras individuales
        let nameInitials = person.name
            .split(" ")
            .map((n) => n.charAt(0).toUpperCase());
        let lastNameInitials = person.lastname
            .split(" ")
            .map((l) => l.charAt(0).toUpperCase());

        //Unir las iniciales con punto como separador
        return [...nameInitials, ...lastNameInitials].join(". ");
    });
};

let resultGetInicials = getInitials(people);
console.log(resultGetInicials);
 */

/*
Función que recibe un String y representa un nombre completo y me regresa sus iniciales
*/
const getInitialsSecond = (fullName) => {
    let fullNameArray = fullName.split(" ");
    console.log(fullNameArray);
    let initialsArray = fullNameArray.map((word) =>
        word.charAt(0).toUpperCase()
    );
    console.log(initialsArray);
    let initialsString = initialsArray.join(". ");
    console.log(initialsString);
    return initialsString + "."; // Para que devuelva las iniciales con el punto final
};

/*
 * Función que extrae los nombres del Array de nombres (people)
 */
const getAllInitials = (namesArray) => {
    let result = namesArray.map((item) => {
        let { name, lastname } = item;
        let fullName = `${name} ${lastname}`;

        return getInitialsSecond(fullName);
    });
    return result;
};

console.log(getAllInitials(people));

//console.log(getInitialsSecond("Ariana Naomi Lopez Puertos"));

let cars = [
    {
        name: "Sentra",
        year: 2023,
        price: 380000,
        discount: 15,
    },
    {
        name: "Versa",
        year: 2023,
        price: 330000,
        discount: 20,
    },
    {
        name: "Toledo",
        year: 2023,
        price: 375000,
        discount: 10,
    },
];

/**
 * Obtener una Lista donde muestre el nombre del auto y el precio final (con descuento)
 */

const getDiscount = (carsArray) => {
    let result = carsArray.map((car) => {
        let name = car.name;
        let price = car.price;
        let discount = car.discount;
        let percent = discount / 100;
        let discountAmount = price * percent;
        let finalPrice = price - discountAmount;
        return `El auto ${name} tiene un descuento del ${discount}% y su precio final de ${finalPrice}`;
    });
    return result;
};
let resultFinalPrice = getDiscount(cars);
console.log(resultFinalPrice);
