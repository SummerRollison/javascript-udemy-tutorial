let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas[1]);
// ouput: ryu

ninjas[1] = 'ken';
console.log(ninjas[1]);
//output: ken

let ages = [20,25,30,35];
console.log(ages[2]);
// output: 30

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);
//output: 3, because there are 3 outputs in ninjas

// array methods

let result0 = ninjas.join(',');
console.log(result0);
//output: shaun,ryu,chun-li


let result1 = ninjas.indexOf('chun-li');
console.log(result1);
//output: 2

let result2 = ninjas.concat(['ken', 'crystal']);
console.log(result2);
// output: "shaun", "ken", "chun-li", "ken", "cryston"

let result3 = ninjas.push('ken');
// console.log(result3);
// output: 4
// this is adding 'ken' to the end of ninjas, counting the strings
// alters the original value, console.log(ninjas) would now output 4

result3 = ninjas.pop();
console.log(ninjas);