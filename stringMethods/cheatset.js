let text = "Hello world";
let text2 = "Developers";
let text3 = "Hello world, welcome to the universe.";
let text4 = "Hello planet earth, you are a great planet.";
let lCompare = "ab";
let lCompare2 = "cd";
let lCompare3 = "cd";
let lCompare4 = "ab";
let lCompare5 = "AB";
let padText = "5";
let padNumber = 5;

/**
 * =======================================================================
 *
 * The at() method returns an indexed character from a string.
 *
 * ======================================================================
 */

console.log("at() ====> ", text.at(3)); // l

// An index of -1 returns the last character from the string.
console.log("at() ====> ", text.at(-1)); // a

/**
 * =======================================================================
 *
 * The charAt() method returns the character at a specified index (position) in a string.
 *
 * ======================================================================
 */

// Get the first character in a string:
console.log("charAt() ====> ", text.charAt(0)); // H

//Get the second character in a string:
console.log("charAt() ====> ", text.charAt(1)); // e

// Get the last character in a string:
console.log("chatAt() ====> ", text.charAt(text.length - 1)); // d

/**
 * =======================================================================
 * 
 *  The concat() method joins two or more strings.
 *  The concat() method does not change the existing strings.
 *  The concat() method returns a new string.

 * ====================================================================== 
 */

// Join two strings:
console.log("concat() ====> ", text.concat(text2)); // Hello worldDevelopers

// Join two strings:
console.log("concat() ===> ", text.concat(" ", text2)); // Hello world Developers

/**
 * =======================================================================
 * 
 *  The endsWith() method returns true if a string ends with a specified string.
 *  Otherwise it returns false.

 *  The endsWith() method is case sensitive.

 * ====================================================================== 
 */
// Check if a string ends with "world":
console.log("ensdWith ====> ", text.endsWith("world")); // true

console.log("endsWith ====> ", text.endsWith("World")); // false

// Check if the 11 first characters of a string ends with "world":
console.log("endsWith ====> ", text.endsWith("world", 11)); // true

/**
 * =======================================================================
 * 
 *  The includes() method returns true if a string contains a specified string.
 
*   Otherwise it returns false.

*   The includes() method is case sensitive.

 * ====================================================================== 
 */

// Check if a string includes "world":
console.log("includes() ====> ", text3.includes("world")); // true

// Start at position 12:
console.log("includes() ====> ", text3.includes("world", 12)); // false

/**
 * =======================================================================
 * 
 *  The indexOf() method returns the position of the first occurrence of a value in a string.

*   The indexOf() method returns -1 if the value is not found.

*   The indexOf() method is case sensitive.

 * ====================================================================== 
 */

//Search a string for "welcome":
console.log("indexOf ====> ", text3.indexOf("welcome")); // 13

//Search a string for "Welcome":
console.log("indexOf ====> ", text3.indexOf("Welcome")); // -1

// Find the first occurence of "e":
console.log("indexOf ====> ", text3.indexOf("e")); // 13

// Find the first occurence of "e", starting at position 5:
console.log("indexOf ====> ", text3.indexOf("e", 5)); // 14

// Find the first occurence of "a":
console.log("indexOf ====> ", text3.indexOf("a")); // -1

/**
 * =======================================================================
 * 
 *  The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

*   The lastIndexOf() method searches the string from the end to the beginning.

*   The lastIndexOf() method returns the index from the beginning (position 0).

*   The lastIndexOf() method returns -1 if the value is not found.

*   The lastIndexOf() method is case sensitive.

 * ====================================================================== 
 */

// Search the last occurrence of "planet":
console.log("lastIndexOf ====> ", text4.lastIndexOf("planet")); // 36

// Search the last occurrence of "Planet":
console.log("lastIndexOf ====> ", text4.lastIndexOf("Planet")); // -1

// Search for the last occurrence of "planet", starting at position 20:
console.log("lastIndexOf ====> ", text4.lastIndexOf("planet", 20)); // -1

/**
 * =======================================================================
 * 
 *  The length property returns the length of a string.
 *  the length property of an empty string is 0.

 * ====================================================================== 
 */

// Examples:
console.log("length ====> ", text.length); // 11
console.log("length ====> ", text2.length); // 10
console.log("length ====> ", text3.length); // 37
console.log("length ====> ", text4.length); // 43

/**
 * =======================================================================
 * 
 *  The localeCompare() method compares two strings in the current locale.

*   The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

*   The current locale is based on the language settings of the browser.

 * ====================================================================== 
 */

// Compare "ab" with "cd":
console.log("localeCompare ====> ", lCompare.localeCompare(lCompare2)); // -1

console.log("localeCompare ====> ", lCompare3.localeCompare(lCompare4)); // 1

console.log("localeCompare ====> ", lCompare.localeCompare(lCompare4)); // 0

console.log("localeCompare ====> ", lCompare.localeCompare(lCompare5)); // 1

/**
 * =======================================================================
 * 
 *  The match() method matches a string against a regular expression **

*   The match() method returns an array with the matches.

*   The match() method returns null if no match is found.

 * ====================================================================== 
 */

// A search for "net" using a string:
console.log("match ====> ", text4.match("net")); // ['net']

// A search for "net" using a regular expression:
console.log("match ====> ", text4.match(/net/)); // ['net']

// A global search for "net":
console.log("match ====> ", text4.match(/net/g)); // [ 'net', 'net' ]

/**
 * =======================================================================
 * 
 *  The padEnd() method pads a string at the end.

 *  The padEnd() method pads a string with another string (multiple times) until it reaches a given length.

 * To pad a number, convert the number to a string first.

 * ====================================================================== 
 */

// Examples
console.log("padEnd ====> ", padText.padEnd(4, "0")); // "5000"

console.log("padEnd ====> ", padText.padEnd(4, "x")); // "5xxx"

let becomeToStr = padNumber.toString();
let padded = becomeToStr.padEnd(4, "0");
console.log("padEnd ====> ", padded); // 5000

/**
 * =======================================================================
 * 
 *  The padStart() method pads a string from the start.

 *  The padStart() method pads a string with another string (multiple times) until it reaches a given length.

* To pad a number, convert the number to a string first.

 * ====================================================================== 
 */

// Examples

// Pad a string with "0" until it reaches the length 4:
console.log("padStart ====> ", padText.padStart(4, "0")); // 0005

// Pad a string with "x" until it reaches the length 4:
console.log("padStart ====> ", padText.padStart(4, "x")); // xxx5

/**
 * =======================================================================
 * 
 *  The repeat() method returns a string with a number of copies of a string.

 *  The repeat() method returns a new string.

 *  The repeat() method does not change the original string.

 * ====================================================================== 
 */

// Create copies of a text:
console.log("repeat ====> ", text.repeat(2)); // Hello worldHello world

console.log("repeat ====> ", text.repeat(4)); // Hello worldHello worldHello worldHello world

/**
 * =======================================================================
 * 
 *  The replace() method searches a string for a value or a regular expression.

 *  The replace() method returns a new string with the value(s) replaced.

 *  The replace() method does not change the original string.

 * ====================================================================== 
 */

// Replace world:
console.log("replace ===> ", text.replace("world", "Developers!!")); // Hello Developers!!

// A global replacement:
let textToReplace = "Mr Blue has a blue house and a blue car";
console.log("replace ====> ", textToReplace.replace(/blue/g, "red")); // Mr Blue has a red house and a red car

// A global, case-insensitive replacement:
let textToReplace2 = "Mr Blue has a blue house and a blue car";
console.log("replace ====> ", textToReplace.replace(/blue/gi, "red")); // Mr red has a red house and a red car

// A function to return the replacement text:
let result = textToReplace.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
});

console.log("replace ====> ", result); // Mr BLUE has a BLUE HOUSE and a BLUE CAR
