//query selector method
const paragraph = document.querySelector('p'); // first tag p it finds
const paragraph1 = document.querySelector('.error'); // first class 'error' it finds
const paragraph2 = document.querySelector('div.error'); // first tag div with a class 'error' it finds
const paragraphs = document.querySelectorAll('p'); // hooks all of the p tags it finds on the document and returns it as a node list, which is not exactly like an array

//get element by ID method
const pageTitle = document.getElementById('page-title');

// get element by class name method
const errors = document.getElementsByClassName('error');
const content = document.querySelector('.content');

// get element by tag name method
const paragraphs1 = document.getElementsByTagName('p');

//getting and setting attributes
const link = document.querySelector('a');
const message = document.querySelector('p.error');

//changing CSS styles
pageTitle.style.margin = '50px'; // to append a style
pageTitle.style.margin = ''; // to delete or remove that property

// adding or removing classes
paragraph2.classList.add('success');
paragraph2.classList.remove('success');

// test exercise, adding or removing classes:
const paragraphs2 = document.querySelectorAll('p.test');

// referencing and manipulating sibling, children and parent document objects
const article = document.querySelector('article');
const title = document.querySelector('h3');

// button event listener
const button = document.querySelector('button');
const items = document.querySelectorAll('li.todo');
let ul1 = document.querySelector('ul.todo');

export{paragraph}
export{paragraph1}
export{paragraph2}
export{paragraphs}
export{pageTitle}
export{errors}
export{paragraphs1}
export{content}
export{link}
export{message}
export{paragraphs2}
export{article}
export{title}
export{button}
export{items}
export{ul1}