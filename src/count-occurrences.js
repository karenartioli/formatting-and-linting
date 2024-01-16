"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} ArrayStrings - array of strings to check
 * @param {string} stringToCount - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function countOcurrances(ArrayStrings, stringToCount) {
  let count = 0;
  for (let element of ArrayStrings) {
    if (stringToCount == element) {
      count++;
    }
  }
  return count;
}

console.log(countOcurrances(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(countOcurrances(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(countOcurrances(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(countOcurrances(["na", "na", "na", "na", "BATMAN"], "a"), 0);
