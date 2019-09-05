// template strings
const title = 'Best reads of 2019';
const author = 'Summer';
const likes = 30;

// concatenation way
let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);
// output: the blog called Best reads of 2019 by Summer has 30 likes

// template string way or template literal
let result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
//  same output, easier to type and manage

// creating html templates
let html = `
<h2>${title}</h2>
<p>by ${author}</p>
<span>this blog has ${likes} likes</span>
`;
console.log(html);