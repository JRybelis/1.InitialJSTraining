import { rainbow } from "./controlFlow/switch.js";
import { greet } from "./functions/function.js";
import { speak } from "./functions/function.js";
import { calcArea } from "./functions/function.js";
import { bill2 } from "./functions/function.js";
import { greet2 } from "./functions/function.js";
import { name } from "./functions/function.js";
import { user } from "./objects/objectLiterals.js";

console.log(rainbow);

//calling a function:
greet();
speak('Bender', 'morning'); // Bender and morning are function arguments

const area = calcArea(7);
console.log(area);

console.log(bill2([10, 15, 40], .2));

//function
let result1 = greet2();
console.log(result1, name);

// method
let result2 = name.toUpperCase();
console.log(result2);

//callbacks with foreach method:
const people = ['Joe', 'Tim', 'Jamie', 'Eddie', 'Duncan'];
people.forEach((person, index) => console.log(index, person));
// == 
const logPerson = (person, index) => {console.log(`${index} - Hello ${person}.`)};
people.forEach(logPerson);

//creating and sending the html template:
const ul = document.querySelector('.people');
let html = ``;
people.forEach(person => html += `<li style = "color: green">${person}</li>`);
ul.innerHTML = html;

console.log(user.name, user.location, user.age);
user.login();
user.logout();
user.logBlogs();
