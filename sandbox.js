// booleans & comparasions
console.log(true, false);

// methods can return booleans
let email = 'me@summerrollison.com';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@');
console.log(result);

let result1 = names.includes('luigi');
console.log(result1);

// comparison operators

let age = 25;

console.log(age == 25);
// double = asks if two things are the same

console.log(age != 30); 
// != means is age not equal to 30

console.log(age > 20);
// asking if age is greater than 20

console.log(age <= 25);
// greater than or equal to

let name = 'shaun';

console.log(name == 'shaun'); // true
console.log(name == 'Shaun'); // false
console.log(name > 'crystal'); // true, bc s comes later than c
console.log(name > 'Shaun'); // true, lowercase is greater than uppercase
console.log(name == 'Crystal'); // true 