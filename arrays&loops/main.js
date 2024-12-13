let fruits = [{ name: "Pera" }, { name: "Uva" }, { name: "Maranja" }];
let fav = fruits[1].name;
console.log(fav);

let products = [
    { name: "Cake topper", price: 15 },
    { name: "Taza", price: 75 },
    { name: "Caja", price: 37.5 },
];

// Función que me permite leer el nombre y el precio de un producto:

const getNameAndPrice = (product) => {
    let name = product.name;
    let price = product.price;
    return `El producto es ${name} y su precio es de ${price} pesos`;
};

// Ciclo for que hará que la función se repita n cantidad de veces:

for (let i = 0; i < products.length; i++) {
    let result = getNameAndPrice(products[i]);
    console.log(result);
}
