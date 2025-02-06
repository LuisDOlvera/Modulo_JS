// Excercises Array Methods.

const artist = [
    {
        name: "Kyuss",
        albums: [
            {
                title: "Wretch",
                year: 1991,
            },
            {
                title: "Blues for the Red Sun",
                year: 1992,
            },
            {
                title: "Welcome to Sky valley",
                year: 1994,
            },
            {
                title: "...And the Circus Leaves Town",
                year: 1995,
            },
        ],
    },
    {
        name: "Ben Harper",
        albums: [
            {
                title: "The Will to Live",
                year: 1997,
            },
            {
                title: "Burn to Shine",
                year: 1999,
            },
            {
                title: "Live from Mars",
                year: 2001,
            },
            {
                title: "Diamonds on the Inside",
                year: 2003,
            },
        ],
    },
];

// Ciclo For:
for (let i = 0; i < artist.length; i++) {
    console.log("Ciclo for() ====>", artist[i].name);
}

// forEach()
artist.forEach((artist, index, artists) => {
    console.log("forEach() ====>", artist.name);
});

const printName = (artist, index, artists) => {
    console.log("forEach() ====>", artist.name);
};
artist.forEach(printName);

// Ciclo for, guardando en una nuevo array los nombres.
const artistNames = [];
for (let i = 0; i < artist.length; i++) {
    artistNames.push(artist[i].name);
}
console.log("Ciclo for() ====>", artistNames);

// Método .map() para guardar los datos en un nuevo array:
const artistNamesInMap = artist.map((artist, index, artists) => {
    return artist.albums; // Determines the new value in the result array
});
console.log("map() ====>", artistNamesInMap);
