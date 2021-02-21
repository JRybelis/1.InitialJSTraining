// function declaration (declared functions are hoisted (loaded) at the top of the file, irrespective of their location in the code): 
function greet(){
    console.log('hello there');
}

// function expression, when you store a function inside a variable (it must have a semicolon at the end). Expressed functions are not hoisted, they are loaded normally, line by line: 
const speak = function(name = 'Yugi', time = 'evening') { // name & time are function parameters. We also assigned default values to them.
    console.log(`Good day ${name}, how was your ${time}?`); 
};

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

//arrow function variant (when there is only 1 parameter, no parentheses are needed, but when there are 0 or >1 parameters, parentheses are required). When there is only 1 return operation in the code block, return keyword and the code block curly braces can be omitted.: 
const calcArea = radius => 3.14 * radius**2;


const greeting1 = function() {
    return 'Hello, world!';
}
// == 
const greeting2 = () => 'Hello, world!';

const bill1 = function(products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products [i] * tax;
    }
    return total;
};
// ==
const bill2 = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

let name = 'Alex';
const greet2 = () => 'Hi,';


export{greet}
export{speak}
export{calcArea}
export{bill2}
export{greet2}
export{name}

