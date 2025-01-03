/* let fruits = [{ name: "Pera" }, { name: "Uva" }, { name: "Maranja" }];
let fav = fruits[1].name;
console.log(fav); */

/* let products = [
    { name: "Cake topper", price: 15 },
    { name: "Taza", price: 75 },
    { name: "Caja", price: 37.5 },
];
*/

/* let cars = [
    { brand: "Peugeot", model: "208" },
    { brand: "Nissan", model: "Versa" },
    { brand: "Suzuki", model: "Swift" },
]; */

// Función que me permite leer el nombre y el precio de un producto:

/* const getNameAndPrice = (product) => {
    let name = product.name;
    let price = product.price;
    return `El producto es ${name} y su precio es de ${price} pesos`;
}; */

/* const getBrandAndModel = (car) => {
    let brand = car.brand;
    let model = car.model;
    return `El auto que te gusta es de la marca ${brand} y es de modelo ${model}`;
};
 */
// Ciclo for que hará que la función se repita n cantidad de veces:

/* for (let i = 0; i < products.length; i++) {
    let result = getNameAndPrice(products[i]);
    console.log(result);
} */

/* for (let i = 0; i < cars.length; i++) {
    let resultCars = getBrandAndModel(cars[i]);
    console.log(resultCars);
} */

// Ejercicios:

let lastnames = [
    "Olvera Díaz",
    "Miranda Ramírez",
    "Olvera Miranda",
    "Olvera Miranda1",
    "Olvera Miranda2",
];

let products = [
    { name: "Cake topper", price: 150, discount: 10 },
    { name: "Taza", price: 750, discount: 5 },
    { name: "Caja", price: 370.5, discount: 15 },
];

/**
 * Necesito saber la cantidad de letras que tiene cada uno de los nombres de la lista de nombres
 */

const countLettersInNames = () => {
    let names = [
        "Luis Daniel",
        "Mayra Lilian",
        "Daniela",
        "Emilio",
        "Estefanía",
    ];
    let letterCounts = [];

    for (let i = 0; i < names.length; i++) {
        // Eliminamos los espacios del nombre y contamos las letras
        let letterCount = names[i].replace(/\s/g, "").length;
        letterCounts.push({ name: names[i], letterCount: letterCount });
    }
    return letterCounts;
};

let resultLetterCount = countLettersInNames();
console.log(resultLetterCount);

/**
 * Necesito saber el nombre completo de cada personaje en la listas.
 */

/**
 * Necesito saber el nombre, precio y precio final de cada uno de los productos que tengo en mi lista de productos.
 */

const getNamePriceAndDiscount = (product) => {
    let nameProduct = product.name;
    let priceProduct = product.price;
    let priceWithDiscount = product.discount;
    return `El producto es: ${nameProduct}, su precio actual es de: ${priceProduct} y su precio con descuento es de: ${
        priceProduct * (priceWithDiscount / 100)
    }`;
};

for (let i = 0; i < products.length; i++) {
    let resultDiscount = getNamePriceAndDiscount(products[i]);
    console.log(resultDiscount);
}
