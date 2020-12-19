const rainbow = ["black", "blue", "cyan", "white", "grey", "brown", "yellow", "green", "blue", "purple", "red", "orange"];

rainbow.push("lambda"); /* adds an element to the end of the array */

/** switch statement evaluates an object and execudes code, based on whether the cases provided meet the requirements. 
 * rainbow[rainbow.length -1] gives the switch statement the last element of the array for it to check. 
*/
switch(rainbow[rainbow.length -1]){ 
    case "green":
        console.log(`${rainbow[rainbow.length-1]} is green`);
        break;
    case "orange":
        console.log(`${rainbow[rainbow.length -1]} is orange`);
        break;
    case "blue":
        console.log(`${rainbow[rainbow.length -1]} is blue`);
        break;
    case "black":
        console.log(`${rainbow[rainbow.length -1]} is black`);
        break;
    case "purple":
        console.log(`${rainbow[rainbow.length -1]} is purple`);
        break;
    case "red":
        console.log(`${rainbow[rainbow.length -1]} is red`);
        break;
    case "cyan":
        console.log(`${rainbow[rainbow.length -1]} is cyan`);
        break;
    case "yellow":
        console.log(`${rainbow[rainbow.length -1]} is yellow`);
        break;
    case "white":
        console.log(`${rainbow[rainbow.length -1]} is white`);
        break;
    case "blue":
        console.log(`${rainbow[rainbow.length -1]} is blue`);
        break;
    case "brown":
        console.log(`${rainbow[rainbow.length -1]} is brown`);
        break;
    case "grey":
        console.log(`${rainbow[rainbow.length -1]} is grey`);
        break;
    default:
        console.log(`${rainbow[rainbow.length -1]} is not a colour`);
        break;
}

export { rainbow }