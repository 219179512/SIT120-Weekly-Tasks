// String Method 1: Comparing Strings
let a = 'a';
let b = 'b';
if (a < b) {
    console.log(a + ' is less than ' + b);
} else if (a > b) {
    console.log(a + ' is greater than ' + b);
} else {
    console.log(a + ' and ' + b + ' are equal.');
}

// String Method 2: Lowercase and uppercase
let c = 'c';
let d = 'D';

console.log(c.toUpperCase());
console.log(d.toUpperCase());
console.log(c + d);

// String Method 3: How to write long strings
let longString = 
    'This is a very long string which needs ' +
    'to wrap across multiple lines because ' +
    'otherwise my code is unreadable.';

console.log(longString);
longString =
    'This is a very long string which needs \
                    to wrap accross multiple lines because \
                    otherwise my code is unreadable. ';

                    console.log(longString);

// String Method 4: Return the length of a string
let countString = "This is a very long string which needs to have its character count returned."
let length = countString.length;

console.log(countString.length);

// String Method 5: Joins two or more strings
let string1 = "Hello";
let string2 = "Goodbye!";
let string3 = string1.concat(" ", string2);

console.log(string3);

