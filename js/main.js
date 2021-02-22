import { rainbow } from "./controlFlow/switch.js";
import { greet } from "./functions/function.js";
import { speak } from "./functions/function.js";
import { calcArea } from "./functions/function.js";
import { bill2 } from "./functions/function.js";
import { greet2 } from "./functions/function.js";
import { name } from "./functions/function.js";
import { user } from "./objects/objectLiterals.js";
import { paragraph } from "./DOM/DOM.js";
import { paragraph1 } from "./DOM/DOM.js";
import { paragraph2 } from "./DOM/DOM.js";
import { paragraphs } from "./DOM/DOM.js";
import { pageTitle } from "./DOM/DOM.js";
import { errors } from "./DOM/DOM.js";
import { paragraphs1 } from "./DOM/DOM.js";
import { content } from "./DOM/DOM.js";
import { link } from "./DOM/DOM.js";
import { message } from "./DOM/DOM.js";
import { paragraphs2 } from "./DOM/DOM.js";
import { article } from "./DOM/DOM.js";
import { title } from "./DOM/DOM.js";
import {button} from "./DOM/DOM.js";
import {items} from "./DOM/DOM.js";
import {ul1} from "./DOM/DOM.js";
import {copy} from "./DOM/DOM.js";
import {box} from "./DOM/DOM.js";
import {popupButton} from "./DOM/popup.js";
import {popup} from "./DOM/popup.js";
import {close} from "./DOM/popup.js";

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


//DOM manipulation: 
paragraph.innerText = 'Ninjas are awesome.';
console.log(paragraph.innerText); 
console.log(paragraph1); 
console.log(paragraph2); 
paragraphs.forEach(parag => {
    parag.innerText += " at 6PM."
    console.log(parag.innerText)
});
console.log(pageTitle); 
console.log(errors);
console.log(paragraphs1);
content.innerHTML = '<h2>This is a new H2</h2>';
console.log(content.innerHTML);

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

//getting and setting attributes:
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.startpage.com');
console.log(link.getAttribute('href'));
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
message.setAttribute('style', 'color: blue;');
console.log(message.getAttribute('class'));

// adding or removing classes exercise:
console.log(paragraphs2.entries());
paragraphs2.forEach(parag => {
    if (parag.textContent.includes('error')){
        parag.classList.add('error');
    } 
    if (parag.textContent.includes('success')) {
        parag.classList.add('success');
    }
});

// toggling class apply: 
pageTitle.classList.toggle('test'); // adds the class
pageTitle.classList.toggle('test'); // removes the class

// referencing and manipulating sibling, children and parent document objects
console.log(article.children); // creates a HTML collection
console.log(Array.from(article.children)); // creates a new value that is an array, does not overwrite the html collection above
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

title.parentElement.classList.add('article-body');
title.nextElementSibling.classList.remove('article-element');
title.nextElementSibling.nextElementSibling.classList.remove('article-element');

// button event listener
button.addEventListener('click', () => {
    const li = document.createElement('li'); // creates a new element
    li.classList.add('todo');
    li.textContent = 'Something new to do'; // adds content to the element
    ul1.append(li); // adds the tag at the bottom of the parent element's content
    ul1.prepend(li); // adds the tag at the top of the parent element's content
});

// items.forEach(item => 
//     {item.addEventListener('click', e => {
//         console.log(e.target);// locates which of the items was clicked.
//         e.target.style.textDecoration = 'line-through';
//         e.stopPropagation(); // stops events from bubbling up from target
//         e.target.remove(); 
//     });
// }); 

ul1.addEventListener('click', e => {
    if (e.target.tagName === 'LI') { // event delegation - UL controls LIs
        e.target.remove();
    }
    console.log(e.target);
});

//copy event listener
copy.addEventListener('copy', () => {
    console.log('Oi! My content is copyrigted!');
});

//mouse pointer move event listener
box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY);// displaying cursor coodrinates inside the div
    box.textContent = `X position is ${e.offsetX}, Y position is ${e.offsetY}`;
});

//popup
popupButton.addEventListener('click', () => {
    popup.style.display = 'block'; // launches the popup
});
close.addEventListener('click', () => {
    popup.style.display = 'none'; // closes the popup
});
popup.addEventListener('click', () => {
    popup.style.display = 'none'; // closes the popup
});
