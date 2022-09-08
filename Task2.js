// String Array
let fish = ['Carp', 'Salmon', 'Amberjack', 'Tuna'];
console.log(fish);

// Find Method
console.log(fish.find((fish) => fish === 'Amberjack'));
console.log(fish.find((fish) => fish === 'Amberjack1'));

// Push Method
// Push adds an element to the end of the array and then returns the new length of the array
console.log(fish.push('Sardine'));
console.log(fish);

// Pop Method
// Pop removes the last element of the array and then returns the removed element
console.log(fish.pop());
console.log(fish);

// Number Array
let numbers = [6,7,2,4,8];

// Sort method
// Sort method sorts the array
console.log(numbers.sort());

// Slice method
// Slice method cuts out part of the array
console.log(numbers.slice(1, 3));

