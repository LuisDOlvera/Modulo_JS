function sayThanks(name) {
    console.log(
        "Thank you for your purchase " + name + "! We appreciate your business."
    );
}

sayThanks("Luis Daniel");

//Llamar a la función

function greetWorld() {
    console.log("Hello, World");
}

greetWorld();

//Función con Parámetros y Argumentos

const rectWidth = 14;
const rectHeight = 9;

function calculateArea() {
    console.log("The area is: " + rectWidth * rectHeight);
}

calculateArea(rectWidth, rectHeight);

//Funciones con parámetros predeterminados

function greeting(name = "stranger") {
    console.log(`Hello, ${name}!!`);
}
greeting("Luis Daniel");
greeting();

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

//Retorno de una función

const greetWorld2 = () => {
    const greet = "Hello, World!";
    return greet;
};

let resultFunction = greetWorld2;
console.log(resultFunction);

const canIVote = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

console.log(canIVote(19)); // Should print true
console.log(canIVote(18)); // Should print true
console.log(canIVote(13)); // Should print false

const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
        return "You agree!";
    } else {
        return "You disagree!";
    }
};

console.log(agreeOrDisagree("yep", "yep")); // Should print 'You agree!'
console.log(agreeOrDisagree("yeahhh", "yeah")); // Should print 'You disagree!'

function getRectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return "You need positive integer to calculate area!!";
    }
    const area = width * height;
    return area;
}

let rectangleArea1 = getRectangleArea(-12, -10);
let rectangeArea2 = getRectangleArea(16, 12);

console.log(`The area of rectangle 1 is: ${rectangleArea1}`);
console.log(`The area of rectangle 2 is: ${rectangeArea2}`);

function getMonitorCount(rows, colums) {
    const counter = rows * colums;
    return counter;
}

let numOfMonitors = getMonitorCount(16, 11);
console.log(`The num of monitors is ${numOfMonitors}`);

//Funciónes anonimas

const calcArea = function (width, height) {
    const area = width * height;
    return area;
};

let result = calcArea(54, 42);
console.log(`The area of rectangle is: ${result}`);

const plantNeedsWater = function (day) {
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};

let isWednesday = plantNeedsWater("Tuesday");
console.log(isWednesday);

//Funciones Flecha

const rectangeArea3 = (width, height) => {
    let area = width * height;
    return area;
};

let resultArea = rectangeArea3(23, 16);
console.log(`The result is: ${resultArea}`);

const plantNeedsWater2 = (day) => {
    if (day === "Sunday") {
        return true;
    } else {
        return false;
    }
};

let isSunday = plantNeedsWater2("Sunday");
console.log(isSunday);

const lifePhase = (age) => {
    if (age >= 0 && age <= 3) {
        return "baby";
    } else if (age >= 4 && age <= 12) {
        return "child";
    } else if (age >= 13 && age <= 19) {
        return "teen";
    } else if (age >= 20 && age <= 64) {
        return "adult";
    } else if (age >= 65 && age <= 140) {
        return "senior citizen";
    } else {
        return "This is not a valid age";
    }
};

console.log(lifePhase(3)); //should print 'child'
console.log(lifePhase(44)); //should print 'adult'
console.log(lifePhase(-5)); //should print 'This is not a valid age'
console.log(lifePhase(141)); //should print 'This is not a valid age'

const finalGrade = (n1, n2, n3) => {
    if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
        return "You have entered an invalid grade.";
    }
    let average = (n1 + n2 + n3) / 3;
    if (average < 60) {
        return "F";
    } else if (average < 70) {
        return "D";
    } else if (average < 80) {
        return "C";
    } else if (average < 90) {
        return "B";
    } else {
        return "A";
    }
};

console.log(finalGrade(99, 92, 95)); // Should print 'A'
console.log(finalGrade(0, 92, 110)); // Should print 'You have entered an invalid grade'
console.log(finalGrade(55, 46, 10)); // Should print 'F'
console.log(finalGrade(67, 90, 24)); // Should print 'D'

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
    let weightInThePlanet = planet;
    switch (weightInThePlanet) {
        case "Mercury":
            return earthWeight * 0.378;
            break;
        case "Venus":
            return earthWeight * 0.907;
            break;
        case "Mars":
            return earthWeight * 0.377;
            break;
        case "Jupiter":
            return earthWeight * 2.36;
            break;
        case "Saturn":
            return earthWeight * 0.916;
            break;
        default:
            return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    }
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, "Jupiter")); // Should print 236
console.log(calculateWeight(100, "Mars")); // Should print 37.7
console.log(calculateWeight(100, "Saturn")); // Should print 91.600
console.log(calculateWeight(100, "Earth")); // Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.

// Write your function here:
const numImaginaryFriends = (friends) => {
    let numRealFriends = friends * 0.25;
    let imaginaryFriendsRounded = Math.ceil(numRealFriends);
    return imaginaryFriendsRounded;
};

console.log(numImaginaryFriends(20)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// Write your function here:
const sillySentence = (w1, w2, w3) => {
    let myPhrase = `I am so ${w1} because I ${w2} coding! Time to write some more awesome ${w3}!`;
    return myPhrase;
};

console.log(sillySentence("excited", "love", "functions"));

// Write your function here:
const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    //console.log(thisYear);
    // It is totally ok if your function used the current year directly!

    const yearDifference = year - thisYear;
    const newAge = age + yearDifference;
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    } else {
        return `You were ${newAge} in the year ${year}`;
    }
};

console.log(howOld(40, 2026));
console.log(howOld(40, 1975));
console.log(howOld(40, 1990));

/* Así es como se supone que debe calcular la relación:
      100 debe volver'You are likely identical twins.'
      35-99 debería volver'You are likely parent and child or full siblings.'
      14-34 debe volver'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
      6-13 debe volver'You are likely 1st cousins.'
      3-5 debe volver'You are likely 2nd cousins.'
      1-2 debería volver'You are likely 3rd cousins.'
      0 debería volver'You are likely not related.' */

const whatRelation = (percentSharedDNA) => {
    if (percentSharedDNA === 100) {
        return "You are likely identical twins.";
    }
    if (percentSharedDNA > 34) {
        return "You are likely parent and child or full siblings.";
    }
    if (percentSharedDNA > 13) {
        return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
    }
    if (percentSharedDNA > 5) {
        return "You are likely 1st cousins.";
    }
    if (percentSharedDNA > 2) {
        return "You are likely 2nd cousins.";
    }
    if (percentSharedDNA > 0) {
        return "You are likely 3rd cousins";
    }
    return "You are likely not related.";
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'

/* Return the tip, as a number, based on the following:
      ‘bad’ should return a 5% tip
      ‘ok’ should return a 15% tip
      ‘good’ should return a 20% tip
      ‘excellent’ should return a 30% tip
      all other inputs should default to 18% */

// Write your function here:
const tipCalculator = (quality, total) => {
    if (quality === "bad") {
        return `${total * 0.05}%`;
    } else if (quality === "ok") {
        return `${total * 0.15}%`;
    } else if (quality === "good") {
        return `${total * 0.2}%`;
    } else if (quality === "excellent") {
        return `${total * 0.3}%`;
    } else {
        return `${total * 0.18}%`;
    }
};

console.log(tipCalculator("good", 100)); //should return 20
console.log(tipCalculator("bad", 100)); //should return 5
console.log(tipCalculator("excellent", 100)); //should return 30

/* 'shrug' should return '|_{"}_|'
      'smiley face' should return ':)'
      'frowny face' should return':('
      'winky face' should return ';)'
      'heart' should return '<3'
      any other input should return '|_(* ~ *)_|' */

// Write your function here:
const toEmoticon = (emoji) => {
    let getEmoji = emoji;
    switch (getEmoji) {
        case "shrug":
            return '|_{"}_|';
            break;
        case "smiley face":
            return ":)";
            break;
        case "frowny face":
            return ":(";
            break;
        case "winky face":
            return ";)";
            break;
        case "heart":
            return "<3";
            break;
        default:
            return "|_(* ~ *)_|";
    }
};

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("heart"));
console.log(toEmoticon("whatever"));
// Should print  '|_(* ~ *)_|'
