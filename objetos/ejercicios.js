/* 1.- Se necesita saber si un producto cualquiera esta fresco o ya caducó. */

/**
 * Para saber si un producto está caducado o no, debemos comparar el año en el que nos encontramos con el año de su caducidad.
 * Si el año de caducidad es mayor, el producto está fresco.
 * Si el año de caducidad es menor, el producto está caducado.
 */

let product1 = {
    name: "Mayonesa",
    expirationYear: 2030,
};

let product2 = {
    name: "Mostaza",
    expirationYear: 2015,
};

const checkIfRotten = (product, currentYear) => {
    return product.expirationYear < currentYear
        ? "El producto está caducado"
        : "El producto está fresco";
};

let result1 = checkIfRotten(product1, 2024);
let result2 = checkIfRotten(product2, 2024);

console.log(result1);
console.log(result2);

/* 2.- Se necesita que un auto me muestre su descripción. */

let myCar = {
    nameOfCar: "206",
    manufacturer: "Peugeot",
    model: 2017,
    doors: 5,
    transmission: "Automatica",
    brakes: "ABS",
    Color: "Gris Elegance",
    motor: "4 Cilindros",
    fuel: "Gasolina",
    country: "Francesa",
    type: "Sedan",
    cost: "250,800.00 MXN",
    presentCar: () => {
        console.log(
            `El auto seleccionado, es un auto de grandes prestaciones. De tipo ${myCar.type}, el ${myCar.manufacturer} ${myCar.nameOfCar} modelo ${myCar.model} nos ofrece una transmisión ${myCar.transmission}, con frenos ${myCar.brakes} y un motor de ${myCar.motor} a ${myCar.fuel}, totalmente de fabricación original ${myCar.country}. Con un cautivador color ${myCar.Color} y sus ${myCar.doors} puertas, es ideal para el conductor y 4 acompañantes. Conducir éste auto será una experiencia exitante por tan solo ${myCar.cost}. Hazlo tuyo ahora mismo!!`
        );
    },
};

let resultPresentCar = myCar.presentCar();
console.log(resultPresentCar);

/* 3.- Se necesita saber los años que han pasado desde el lanzamiento de un album de alguna banda. 

Para saber los años que han pasado desde el lanzamiento de un álbum de alguna banda, se necesita comparar el año actual contra el año del estreno del álbum y obtener la diferencia de años.  

*/

let album1 = {
    name: "Californication",
    yearOfRelease: 1999,
};

let album2 = {
    name: "Celebration Day",
    yearOfRelease: 2012,
};

let album3 = {
    name: "Death Magnetic",
    yearOfRelease: 2008,
};

const getYearsOfDifference = (album, currentYearNow) => {
    let yearsDifference = currentYearNow - album.yearOfRelease;
    return yearsDifference;
};

let resultAlbum1 = getYearsOfDifference(album1, 2024);
let resultAlbum2 = getYearsOfDifference(album2, 2024);
let resultAlbum3 = getYearsOfDifference(album3, 2024);

console.log(
    `Han pasado ${resultAlbum1} años desde el lanzamiento del álbum ${album1.name}`
);
console.log(
    `Han pasado ${resultAlbum2} años desde el lanzamiento del álbum ${album2.name}`
);
console.log(
    `Han pasado ${resultAlbum3} años desde el lanzamiento del álbum ${album3.name}`
);
