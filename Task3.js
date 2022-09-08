// Date Method 1: Get current time as per constant value
const now = new Date(Date.now());
console.log('The current date is: ');
console.log(now.toDateString());

// Date Method 2: Get current weekday as a number
console.log(now.getDay());

// Date Method 3: Get current day value as a number
console.log(now.getDate());
// Alternatively, set date and return input value
now.setDate(10);
console.log(now.getDate());

// Date Method 4: Get current month as a number
console.log(now.getMonth());

// Date Method 5: Get current year as a number
console.log(now.getFullYear());
// Alternatively, set full year and return input
now.setFullYear(2020);
console.log(now.getFullYear());



