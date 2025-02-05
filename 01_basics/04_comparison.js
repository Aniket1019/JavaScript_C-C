console.log("2" > 1); //true // "2" becomes 2, so 2 > 1 is true.
console.log("02" > 1); //true // "02" also becomes 2, so 2 > 1 is true.

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// Equality (==) checks don't convert null to a number, so null == 0 is false, while comparisons (>, <, >=, <=) convert null to 0, making null > 0 false and null >= 0 true.

console.log(undefined > 0); //undefined > 0 → false (because undefined is not converted to a number like null)
console.log(undefined == 0); //undefined == 0 → false (because undefined is only loosely equal to null, not 0)
console.log(undefined >= 0); //undefined >= 0 → false (because comparisons with undefined always return false)

// ===

console.log("2" === 2); //false // The strict equality operator === doesn't do type conversion, so "2" and 2 are different types and therefore not equal.

