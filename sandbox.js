// type conversion

let score = '100';
console.log(score + 1);
// output: 1001 
// need type conversion to turn string into number

score = Number(score); // turnes score into a number
console.log(score + 1);
// output: 101

console.log(typeof score);
// output: number

let result = Number('hello');
console.log(result);
// output: NaN

let result1 = String(50);
console.log(typeof result1);

let result2 = Boolean(100);
console.log(result2);
// output: true

let result3 = Boolean(0);
console.log(result3);
// output: false

let result4 = Boolean('0');
console.log(result4); //true, strings of any length are true. no length equals false
