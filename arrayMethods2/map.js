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
        return `${name} ${lastname}`;
    });
    return result;
};

let result = getFullNames(mentors);
console.log(result);
