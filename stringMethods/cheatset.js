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

/**
 * =======================================================================
 * 
 *  The replaceAll() method searches a string for a value or a regular expression.

 *  The replaceAll() method returns a new string with all values replaced.

 *  The replaceAll() method does not change the original string.

 *  The replaceAll() method was introduced in JavaScript 2021.

*   The replaceAll() method does not work in Internet Explorer.

 * ====================================================================== 
 */

let replaceAllText =
    "I love cats. Cats are very easy to love. Cats are very popular";

console.log("replaceAll ====> ", replaceAllText.replaceAll("Cats", "Dogs"));
console.log("replaceAll ====> ", replaceAllText.replaceAll("cats", "dogs"));
console.log("replaceAll ====> ", replaceAllText.replaceAll(/Cats/g, "Dogs"));
console.log("replaceAll ====> ", replaceAllText.replaceAll(/cats/g, "dogs"));

/**
 * =======================================================================
 * 
 *  The search() method matches a string against a regular expression **

 *  The search() method returns the index (position) of the first match.

 *  The search() method returns -1 if no match is found.

*   The search() method is case sensitive.

 * ====================================================================== 
 */

let textToSearch = "Mr. Blue has a blue house";
console.log("search ====> ", textToSearch.search("Blue")); // 4
console.log("search ====> ", textToSearch.search("blue")); // 15
console.log("search ====> ", textToSearch.search(/Blue/)); // 4
console.log("search ====> ", textToSearch.search(/blue/)); // 15
console.log("search ====> ", textToSearch.search(/blue/i)); // 4
console.log("search ====> ", textToSearch.search("Red")); // -1

/**
 * =======================================================================
 * 
 *  The slice() method extracts a part of a string.

 *  The slice() method returns the extracted part in a new string.

*  The slice() method does not change the original string.

*  The start and end parameters specifies the part of the string to extract.

*  The first position is 0, the second is 1, ...

*  A negative number selects from the end of the string.

 * ====================================================================== 
 */

// Slice yhe first 5 positions:
console.log("slice ====> ", text.slice(0, 5)); // Hello
// From position 3 to the end:
console.log("slice ====> ", text.slice(3)); // lo world
// From position 3 to 8:
console.log("slice ====> ", text.slice(3, 8)); // lo wo
// Only the first character:
console.log("slice ====> ", text.slice(0, 1)); // H
// Only the last cgaracter:
console.log("slice ====> ", text.slice(-1)); // d
// The whole string:
console.log("slice ====> ", text.slice(0)); // Hello World

/**
 * =======================================================================
 * 
 *  The split() method splits a string into an array of substrings.

 *  The split() method returns the new array.

 *  The split() method does not change the original string.

 *  If (" ") is used as separator, the string is split between words.

 * ====================================================================== 
 */

// Split the words:
let textToSplit = "How are you doing today?";
console.log("split ====> ", textToSplit.split(" ")); // [ 'How', 'are', 'you', 'doing', 'today?' ]
const myArrayToSplit = textToSplit.split(" ");
// Split the words, and return the second word:
let wordSplit = myArrayToSplit[1];
console.log("split ===> ", wordSplit); // are
// Split the characteres, including spaces:
console.log("split ====> ", textToSplit.split("")); /*  [
    'H', 'o', 'w', ' ', 'a',
    'r', 'e', ' ', 'y', 'o',
    'u', ' ', 'd', 'o', 'i',
    'n', 'g', ' ', 't', 'o',
    'd', 'a', 'y', '?'
  ] */
// Use the limit parameter:
console.log("split ====> ", textToSplit.split(" ", 4)); // [ 'How', 'are', 'you', 'doing' ]
// Use a sign as a separator:
console.log("split ====> ", textToSplit.split("o")); // [ 'H', 'w are y', 'u d', 'ing t', 'day?' ]

/**
 * =======================================================================
 * 
 *  The startsWith() method returns true if a string starts with a specified string.

 *  Otherwise it returns false.

 *  The startsWith() method is case sensitive.

 * ====================================================================== 
 */

// Start a position 0 (true):
console.log("startsWith ====> ", text3.startsWith("Hello")); // True
// Start a position 1 (false):
console.log("startsWith ====> ", text3.startsWith("Hello", 1)); // False

/**
 * =======================================================================
 * 
 *  The substr() method extracts a part of a string.

 *  The substr() method begins at a specified position, and returns a specified number of characters.

 *  The substr() method does not change the original string.

 *  To extract characters from the end of the string, use a negative start position.

 * ====================================================================== 
 */

// Extract a substring from text:
let textToSubstr = "Hello Daniela";
console.log("substr ====> ", textToSubstr.substr(1, 4)); // ello
// Start at position 2:
console.log("substr ====> ", textToSubstr.substr(2)); // llo Daniela
// Only the first:
console.log("substr ====> ", textToSubstr.substr(0, 1)); // H
// Only the last:
console.log("substr ====> ", textToSubstr.substr(textToSubstr.length - 1, 1)); // a
// Tle last 6:
console.log("substr ====> ", textToSubstr.substr(-6, 6)); // aniela

/**
 * =======================================================================
 * 
 *  The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

 *  The substring() method extracts characters from start to end (exclusive).

 *  The substring() method does not change the original string.

 *  If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

 *  Start or end values less than 0, are treated as 0.

 * ====================================================================== 
 */

// Extract a substring from text:
console.log("substring ====> ", textToSubstr.substring(1, 4)); // ell
// Start from position 2:
console.log("substring ====> ", textToSubstr.substring(2)); // llo Daniela
// If start is greater than end, parameters are swapped
console.log("substring ====> ", textToSubstr.substring(4, 1)); // llo Daniela
